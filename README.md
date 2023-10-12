# JWT Authentication Template with Next.js and Cookie Storage

This repository contains a basic template for implementing JWT (JSON Web Token) authentication with Next.js and storing the token in cookies. JWT is a widely used standard for securing web applications, and this template provides a starting point for building secure authentication features in your Next.js applications.

## Features

- User registration and login functionality
- JWT token generation and verification
- Storing JWT tokens in secure HTTP-only cookies
- Protected routes that require authentication
- User profile management

## Prerequisites

Before using this template, make sure you have the following software and tools installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (v6 or later recommended)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nextjs-jwt-authentication-template.git
   ```

2. Change to the project directory and Install necessarry packages:

   ```bash
   cd nextjs-jwt-authentication-template
   npm install
   ```

3. Create .env file with following content:

   ```yaml
   NEXT_PUBLIC_API_URL=your_backend_api_url
   ```

4. Run the application

   ```bash
   npm run dev
   ```

## Contributing

If you find issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This template is available under the MIT License. See the LICENSE file for more details.

## Author

Ing. Samuel Šipikal

## Acknowledgments

This project was inspired by the need for a simple JWT authentication template for Next.js applications.
Thanks to the Next.js and Node.js communities for providing excellent resources and documentation.
Happy coding! 🚀🔒
