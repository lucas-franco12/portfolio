import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddBootstrap from "/components/AddBootstrap";
import 'aos/dist/aos.css';
import './globals.css';


export const metadata = {
  title: "Lucas Franco",
  description: "Portfolio website showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}