import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import './app.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300;1,9..144,500&family=Geist:wght@300;400;500&family=Geist+Mono:wght@300;400&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
  },
  { rel: 'canonical', href: 'https://michelletemi.com' },
];

export function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='career change into tech, software engineer career coach, break into fintech, non-traditional tech career, junior software engineer tips, career change to software engineering, tech career resources UK'
        />
        <meta name='author' content='Michelle Temi' />
        <meta
          property='og:title'
          content='Michelle Temi — Software Engineer & Career Coach'
        />
        <meta
          property='og:description'
          content='Free tools and honest advice for people breaking into tech. Built by a fintech engineer who did it without a traditional CS degree.'
        />
        <meta property='og:url' content='https://michelletemi.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://michelletemi.com/og-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Michelle Temi — Software Engineer & Career Coach'
        />
        <meta
          name='twitter:description'
          content='Free tools and honest advice for people breaking into tech. Built by a fintech engineer who did it without a traditional CS degree.'
        />
        <meta
          name='twitter:image'
          content='https://michelletemi.com/og-image.png'
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main
      style={{
        paddingTop: '4rem',
        padding: '1rem',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ width: '100%', padding: '1rem', overflowX: 'auto' }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
