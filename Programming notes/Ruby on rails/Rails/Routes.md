
```table-of-contents
```
## Intro
Routes are defined in the `config/routes.rb` file. This file is a Ruby script where you can define all the routes of your application. You use a domain-specific language (DSL) within this file to describe how requests should be routed.

## Creating a home Route (simple example)
### Generate the controller ([[Commands]])
Run the command `rails generate controller [CONTROLLER_NAME]` to generate the controller. Replace `[CONTROLLER_NAME]` with `page` 

### Add the Route
```ruby
# This is in the routes.rb file created by Ruby on Rails
Rails.application.routes.draw do
	root 'page' # This tells ruby the PageController is the root
end
```

#### Interacting with a controller
```ruby
# routes.rb

Rails.application.routes.draw do
	root 'page#home' # This tells ruby to call the hello method in the  ApplicationController
end
```

### Controller
```ruby
# app/controllers/pages_controller.rb

class PagesController < ApplicationController::base
	def home
		# You can do anything here. This is left blank so it accesses the home.html.erb file

	@message = 'Hello World!'
	end
end
```

### View
Under the views/page folder, create a `home.html.erb` file. It needs to be called `home` because that is the action/method we're invoking on the controller
```ruby
# home.html.erb

<h1>Hello World!</h1>
<p><%= @message %></p>
```

### Notes
- Notice how 'pages' and PagesController share the same first name - pages. Ruby automatically picks this up. So if we have a route like 'user', we need a UserController.

## Blog Example
Let's go through an example of routing in a Ruby on Rails application where we have a simple blog with articles and comments. I'll illustrate how to define RESTful routes for the `articles` and `comments`, including some custom routing. We'll also need a custom controller to handle the articles so you'll find it below the routing section.
### Open the Routing File
All the routing rules are defined in `config/routes.rb` file of your Rails application.

```ruby
Rails.application.routes.draw do
	# Your routes here
end
```

### Define Routes for Articles 
We'll start by defining RESTful routes for articles. This can be done with a single line using the `resources` method, which automatically creates routes for common CRUD operations.
```ruby
Rails.application.routes.draw do
  resources :articles
end
```
> [!info]
> This will create the following routes for you:
> - `GET /articles` - List all articles (index action)
> - `GET /articles/new` - Show a form to create a new article (new action)
> - `POST /articles` - Create a new article (create action)
> - `GET /articles/:id` - Show a specific article (show action)
> - `GET /articles/:id/edit` - Show a form to edit an article (edit action)
> - `PATCH/PUT /articles/:id` - Update a specific article (update action)
> - `DELETE /articles/:id` - Delete a specific article (destroy action)

### Nested Routes for Comments
Suppose each article can have multiple comments. We can define nested routes for comments within the `articles` resource:
```ruby
Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
end
```

This nesting indicates that comments are a nested resource within articles. The routes for comments will be set up to reflect this relationship, for example:
- `GET /articles/:article_id/comments` - List all comments for a specific article
- `POST /articles/:article_id/comments` - Create a new comment for a specific article
- `DELETE /articles/:article_id/comments/:id` - Delete a specific comment from a specific article

### Custom Route
Suppose you want a custom route for a page that shows the top articles. This route responds to `GET /top-articles` and routes it to the `top` action in the `articles` controller. You can add a custom route like this. 
```ruby
Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end

  # Custom route
  get 'top-articles', to: 'articles#top'
end
```

### Generating the controllers and views


### Article Controller
- This controller will handle the request from the server when we make an HTTP call.
- The controller class name should be plural, similar to the table name, followed by the word `Controller`. For articles, it would be `ArticlesController`.
- This controller should be created under `app/controllers` and be named after the class name: `articles_controller.rb`
```ruby
class ArticlesController < ApplicationController
  # GET /articles
  def index
    # Retrieve all articles from the database
    @articles = Article.all
    # Render the index view (usually lists all articles)
  end

  # GET /articles/new
  def new
    # Instantiate a new Article object for the form
    @article = Article.new
    # Render the new view (usually contains the form for creating a new article)
  end

  # POST /articles
  def create
    # Create a new Article based on form parameters
    @article = Article.new(article_params)
    if @article.save
      # Redirect to the show view if the article is successfully saved
      redirect_to @article
    else
      # Re-render the new view if validation fails
      render :new
    end
  end

  # GET /articles/:id
  def show
    # Find an article by its ID
    @article = Article.find(params[:id])
    # Render the show view (usually displays the article details)
  end

  # GET /articles/:id/edit
  def edit
    # Find an article by its ID for editing
    @article = Article.find(params[:id])
    # Render the edit view (usually contains the form for editing the article)
  end

  # PATCH/PUT /articles/:id
  def update
    # Find an article by its ID
    @article = Article.find(params[:id])
    if @article.update(article_params)
      # Redirect to the show view if the article is successfully updated
      redirect_to @article
    else
      # Re-render the edit view if validation fails
      render :edit
    end
  end

  # DELETE /articles/:id
  def destroy
    # Find an article by its ID and delete it
    @article = Article.find(params[:id])
    @article.destroy
    # Redirect to the index view (usually lists all articles)
    redirect_to articles_path
  end

  private

  # Strong parameters method for validating and permitting article parameters
  def article_params
    params.require(:article).permit(:title, :body)
  end

 # GET /top-articles
  def top
    # Fetch the top articles based on some criteria, e.g., views, ratings, etc.
    @articles = Article.where('views > ?', 100).order(views: :desc).limit(10)
    # Render the top view (you would need to create a view at app/views/articles/top.html.erb)
  end

end

```

### Article Model
This model should be created under `app/models/` and be called `article`
```ruby
class Article < ApplicationRecord
  # Relationships
  # Assuming each article has many comments
  has_many :comments, dependent: :destroy

  # Validations
  # Ensuring that every article has a title and a body
  validates :title, presence: true, length: { minimum: 5 }
  validates :body, presence: true

  # Callbacks
  # Example: Updating an article's view count every time it's accessed
  before_save :update_view_count

  # Scopes
  # For example, a scope to get all published articles
  scope :published, -> { where(published: true) }

  # Instance methods
  # For example, a method to check if an article is popular
  def popular?
    views > 100
  end

  private

  def update_view_count
    # Logic to increment the view count
    self.views ||= 0
    self.views += 1
  end
end
```

### Article view
You should create a new view file for the `top` action. This file should be named `top.html.erb` and located in `app/views/articles`.

```ruby
<h1>Top Articles</h1>

<% if @articles.empty? %>
  <p>There are no top articles to display.</p>
<% else %>
  <div class="articles">
    <% @articles.each do |article| %>
      <div class="article">
        <h2><%= link_to article.title, article_path(article) %></h2>
        <p><%= truncate(article.body, length: 250) %></p>
        <p>Views: <%= article.views %></p>
      </div>
    <% end %>
  </div>
<% end %>

```