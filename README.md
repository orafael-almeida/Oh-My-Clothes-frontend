<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://github.com/orafael-almeida/Oh-My-Clothes-frontend/blob/main/public/omc-readme.png?raw=true" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next.js&color=black" alt="Next;js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Wix_SDK-black?style=for-the-badge&logoColor=white&logo=wix&color=black" alt="Node.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
  </div>
<br/><br/></br>
 
  <h1 align="center">Oh My Clothes!</h1>

   <div align="center">
     Oh My Clothes is an e-commerce store that sells exclusive clothing with themes geared towards programmers. The project offers a modern experience, developed with the best technologies, to connect code lovers with unique style.
    </div>
</div>

## 📋 <a name="table">Sumary</a>

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 💻 [Quick Start](#quick-start)
5. 💾 [Environment Variables](#envs)
6. 📅 [Releases](#versions)
7. 🤝 [Contributing](#contributing)
8. 👥 [Authors](#authors)




## <a name="introduction">🚀 Introduction</a>

Oh My Clothes is an e-commerce focused on themed clothing for programmers, combining technology and style. 

Developed with Next.js and React, the project offers a fluid and responsive navigation experience. The modern and highly customizable design is built with TailwindCSS, ensuring an attractive and user-friendly interface.

Zustand, a lightweight and efficient solution, was used to manage states, such as controlling the shopping cart and available products. 

All product data, including images, names and values, are consumed from an external SDK repository, allowing for easy updating and integration.


## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Next.js
- Next.js oAuth
- Tailwind CSS
- Zustand
- Wix SDK

## <a name="features">🔋 Features</a>

- **Fully Responsive**: Perfect adaptation to all devices, ensuring a consistent experience across any platform.

- **Integrated Payments with Stripe**: Secure and reliable payment solution, compatible with multiple payment methods. (in progress)

- **Optimized Server Actions**: Improved performance and server-side state management, reducing latency and enhancing scalability.

- **Product and Inventory Management**: Comprehensive features for adding, editing, and monitoring products and inventory in real time.

- **Smart Shopping Cart**: Features such as auto-saving, dynamic value calculation, and seamless integration with the checkout flow managed by zustand.

- **Advanced SEO and Performance Optimization**: Better visibility in search engines and optimized loading times for a fast and accessible experience.

- **Secure and Custom Authentication**: Robust system for login, registration, and password recovery, with support for multiple providers.

- **Rating and Review System**: Customer feedback directly on products, improving trust and increasing conversion rates.


## <a name="quick-start">💻 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**00 - Prerequisites**

To use this project you must have previously installed the following packages:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager or similar)

**01 - Cloning the Repository**

```bash
git clone https://github.com/orafael-almeida/Oh-My-Clothes-frontend
cd Oh-My-Clothes-frontend
```

**02 - Installation**

Install/Update the project dependencies using npm:

```bash
npm install
```

**03 - Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
Please, check the port.

## <a name="envs">💾 Environment Variables</a>

<details>
<summary><code>.env.local</code></summary>

```
# Private Client ID provided by Wix SDK
NEXT_PUBLIC_WIX_CLIENT_ID=

# Featured products ID
FEATURED_PRODUCTS_CATEGORY_ID=

# New products ID
NEW_PRODUCTS_CATEGORY_ID=

# AppId provided by Wix SDK documentation(addToCurrentCart)
NEXT_PUBLIC_WIX_APP_ID=

```

</details>



## <a name="versions">📅 Release History</a>



* 0.1.0
    * First relase production
* 0.0.1
    * Initial work

## <a name="contributing">🤝 Contributing</a>

Contributions, issues, and feature requests are welcome!

1. Fork it (<https://github.com/orafael-almeida/Oh-My-Clothes-frontend/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## <a name="authors">👥 Authors</a>

<table style="border-collapse: collapse; table-layout: auto text-align: left;">

  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <img src="https://avatars.githubusercontent.com/u/173099475?v=4" width="60" style="border-radius: 50%; display: block; margin: 0 auto;">
      </td>
      <td style="padding: 10px; border: 1px solid #ddd;">Rafael Almeida</td>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <a href="https://www.linkedin.com/in/orafael-almeida/" target="_blank">LinkedIn</a> |
        <a href="https://github.com/orafael-almeida" target="_blank">GitHub</a>
      </td>
    </tr>
  </tbody>
</table>