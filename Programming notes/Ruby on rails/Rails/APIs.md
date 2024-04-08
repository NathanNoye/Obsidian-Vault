```table-of-contents
```
## Overview
We'll go over creating a "Post" endpoint to return blog posts
## 1. **Generate a Model and Migration**  
Create a model for your API. For example, to create a `Post` model with a `title` and `body`, run `rails generate model Post title:string body:text`. Then, migrate your database to create the `posts` table: `rails db:migrate`
## 2. **Generate a Controller**  
Generate a controller for your resource. This will be where you define your API endpoints: `rails generate controller Posts`

## 3. **Set Up Routes**  
In `config/routes.rb`, define routes for your resource. For a RESTful API, you might use
```ruby
# routes.rb

Rails.application.routes.draw do
  resources :posts
end
```

The `resources :posts` line in the `config/routes.rb` file of a Ruby on Rails application defines a standard RESTful route for the `posts` resource. This single line creates multiple routes that map to different actions in the `PostsController` based on standard RESTful conventions. Here’s what it does:

- **Index**: GET `/posts`  
    Maps to the `index` action. This action typically retrieves and lists all instances of the resource.
- **Create**: POST `/posts`  
    Maps to the `create` action. This action is used to create a new instance of the resource.
- **New**: GET `/posts/new`  
    Maps to the `new` action. This action typically returns a form for creating a new instance of the resource. However, in an API-only application, this route is often unnecessary.
- **Edit**: GET `/posts/:id/edit`  
    Maps to the `edit` action. This action usually returns a form for editing an existing instance of the resource. Like `new`, this route is also often unnecessary in API-only applications.
- **Show**: GET `/posts/:id`  
    Maps to the `show` action. This action retrieves and shows a single instance of the resource.
- **Update**: PUT/PATCH `/posts/:id`  
    Maps to the `update` action. This action updates an existing instance of the resource.
- **Destroy**: DELETE `/posts/:id`  
    Maps to the `destroy` action. This action deletes an existing instance of the resource.

## 4. **Implement Controller Actions**  
In your controller (`app/controllers/posts_controller.rb`), implement actions for each RESTful route. For example, for the index action:
```ruby
class PostsController < ApplicationController
  # Before executing the show, update, or destroy actions, set the @post variable.
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  # Index action to list all posts
  def index
    @posts = Post.all  # Fetch all posts from the database
    render json: @posts  # Render the posts as JSON
  end

  # GET /posts/:id
  # Show action to display a specific post
  def show
    render json: @post  # Render the found post as JSON
  end

  # POST /posts
  # Create action to add a new post to the database
  def create
    @post = Post.new(post_params)  # Create a new post instance with permitted parameters
    if @post.save  # Save the post to the database
      # If save succeeds, render the post as JSON with status code 201 (Created)
      render json: @post, status: :created, location: @post
    else
      # If save fails, render the errors as JSON with status code 422 (Unprocessable Entity)
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:id
  # Update action to modify an existing post
  def update
    if @post.update(post_params)  # Update the post with the permitted parameters
      render json: @post  # Render the updated post as JSON
    else
      # If update fails, render the errors as JSON with status code 422 (Unprocessable Entity)
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/:id
  # Destroy action to delete a specific post
  def destroy
    @post.destroy  # Delete the post from the database
    head :no_content  # Return an empty response with status code 204 (No Content)
  end

  private

  # Private method to set the post instance variable for the show, update, and destroy actions
  def set_post
    @post = Post.find(params[:id])  # Find the post by ID and set it to @post
  end

  # Private method to whitelist the permitted parameters for a post
  def post_params
    params.require(:post).permit(:title, :body)  # Permit only title and body for mass assignment
  end
end

```

## 5. **Test Your API**  
Start the Rails server: `rails server`
You can now access your API endpoints, for example, `http://localhost:3000/posts` for the `index` action of the `Posts` controller.