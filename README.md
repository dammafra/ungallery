# 📸 UnGallery

<a rel="noopener noreferrer" target="_blank" href="https://ungallery.vercel.app">
<img height="34px" src="https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/deployed-on-vercel.svg" alt="Deployed on vercel">
</a>

</br>

This project is a web application that utilizes the Unsplash API to search and display images based on user-entered keywords. Additionally, it allows users to save their favorite images and leave comments. The website is responsive for enhanced user experience across different devices.

Visit [https://ungallery.vercel.app](https://ungallery.vercel.app) to explore the application.

## Technologies Used

- [Next.js](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com) for deployment and CI ([Link to deployed site](https://ungallery.vercel.app/))
- [Firebase](https://firebase.google.com) for authentication and storage, chosen for its rapid implementation and scalability

## Features

- Search and display images based on keywords
- Random keyword generation if no search term is provided
- Pagination for managing large sets of search results
- Detailed view for each image
- Favorite image saving for personalization
- Comments functionality for interaction among users
- Responsive interface for optimal viewing on various devices

## Compliance with Unsplash API Guidelines

The application adheres to the [Unsplash API guidelines](https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines) to ensure responsible and respectful usage of their resources. These guidelines cover both technical requirements and usage policies, in particular:

- The application uses the hotlinked image URLs provided by the Unsplash API for displaying images.
- All images displayed are properly attributed to Unsplash and the respective photographers, including links back to their Unsplash profiles with utm parameters for tracking.
- Users are not required to register for a developer account with the Unsplash API to access the application. A proxy solution manages API requests on their behalf.
- Caching is in place on the proxy server to prevent the abuse of Unsplash APIs, ensuring that the application's usage remains within acceptable limits and does not disrupt Unsplash services.

## How to Use

1. Clone the repository.
2. Install dependencies using

   ```bash
   npm install
   ```

3. Run the development server using

   ```bash
   npm run dev
   ```

4. Access the application locally at `http://localhost:3000`.

## Contributors

- [Francesco Dammacco](https://github.com/dammafra)

## License

This project is licensed under the [MIT License](LICENSE).
