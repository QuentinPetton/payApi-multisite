# PayapiMultiSite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Disclaimer

This project is a personal training exercise on the Angular framework. It allows me to practice different methods, architectures, and approaches. It is not a final representation of how I would structure a production-ready Angular application.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Tests

The form components have unit tests to verify the following behaviors:

- The submit button is correctly disabled when the email input is invalid.
- The submit button is enabled when a valid email is provided.
- When the form is submitted successfully, the emailSent signal is updated, allowing the confirmation message to be displayed for better user experience.
  
To run the test:

```bash
ng test
```

This will start the test runner and display the results in the console.

## Docker support

This project includes a Dockerfile to build and serve the production, using Nginx.

### Build the Docker image

```bash
docker build -t angular-app .
```

Run the container

```bash
docker run -p 8080:80 angular-app
```

Then open your browser at [http://localhost:8080](http://localhost:8080)
