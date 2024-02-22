
# urlShortener

## Introduction
`urlShortener` is a web application that allows users to shorten long URLs to make them easier to share or manage. The application is built with Ruby on Rails and incorporates Tailwind CSS for styling, ensuring a responsive and modern user interface.

## Requirements
- Ruby 2.7.6
- Rails 6.0.6
- PostgreSQL for the database
- Puma as the app server
- Foreman for managing multiple processes
- Node.js and Yarn (for Webpacker and Tailwind CSS)

This project also uses several gems for enhanced functionality:
- `webpacker` for managing JavaScript code
- `turbolinks` for faster navigation
- `jbuilder` for JSON APIs
- `sass-rails` for SCSS stylesheets
- `tailwindcss-rails` for integrating Tailwind CSS

## Setup

### Clone the repository
```bash
git clone https://github.com/eng-adan/urlShortener.git
cd urlShortener
```

### Install dependencies
Install Ruby and Node.js dependencies:
```bash
bundle install
yarn install
```

### Database setup
Create and migrate your database:
```bash
rails db:create db:migrate
```

### Start the server using Foreman
Install Foreman globally if you haven't already:
```bash
gem install foreman
```
Then start your application:
```bash
foreman start -f Procfile.dev
```
Foreman will start all processes defined in your `Procfile.dev`, including the Rails server and any webpack compilation for Tailwind CSS, ensuring that your application is fully operational.

## Usage
After starting the application, visit `http://localhost:3000` in your web browser to access `urlShortener`. The application provides a simple interface for entering long URLs and receiving a shortened version in return, which you can easily share or manage.

## Contributing
We welcome contributions to `urlShortener`! To contribute, please fork the repository and create a new branch for your feature or fix. Submit a pull request with your changes, ensuring that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is released under the [MIT License](http://opensource.org/licenses/MIT).
