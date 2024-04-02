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