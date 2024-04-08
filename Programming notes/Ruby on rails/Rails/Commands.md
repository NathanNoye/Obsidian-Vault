```table-of-contents
```

## Start a server
Start a ruby server. For local dev, it usually serves to localhost:3000
`rails server` or `rails s`
## Generate controllers
Used to generate controllers, views folder, helpers, tests, and stylesheets.
`rails generate controller [CONTROLLER_NAME]`

**Example:** `rails generate controller pages`
**Output:**
- app/controllers/pages_controller.rb
- app/views/pages
- test/controllers/pages_controller_test.rb
- app/helpers/pages_helper.rb
- app/assets/stylesheets/pages.scss

## Generate Models
Used to generate models
`rails generate model [MODEL_NAME]`

**Example:** `rails generate model Article title:string body:text views:integer`

## Migrate DB (push changes to database)
`rails db:migrate`

## Create a full set of model, database migration, controller, views, and test files for a new resource.
`rails generate scaffold [RESOURCE_NAME] [properties]`

**Example**: `rails generate scaffold Article title:string description:text`

**Here’s what it does:**
1. **Model**: Creates a model file `Article` in `app/models/article.rb`. This model will have `title` and `description` attributes, with types `string` and `text` respectively.
2. **Migration**: Generates a database migration file in `db/migrate/`. This migration will create the `articles` table with `title` and `description` columns when you run `rails db:migrate`.
3. **Controller**: Creates an `ArticlesController` in `app/controllers/articles_controller.rb` with standard CRUD (Create, Read, Update, Delete) actions implemented.
4. **Views**: Generates view templates for the CRUD actions in `app/views/articles/`. This includes views for listing articles (`index.html.erb`), showing a single article (`show.html.erb`), editing an article (`edit.html.erb`), new article form (`new.html.erb`), and a partial for form fields (`_form.html.erb`).
5. **Routes**: Adds a resource route to `config/routes.rb` that creates RESTful routes for the articles resource.
6. **Tests**: Generates test files for both the model and controller in the `test/models/` and `test/controllers/` directories, respectively.
7. **Assets**: Creates stylesheet and JavaScript files for the scaffold (if applicable, depending on the version of Rails and configuration).
8. **Helper**: Generates a helper file (`app/helpers/articles_helper.rb`) that can be used to store helper methods related to articles.