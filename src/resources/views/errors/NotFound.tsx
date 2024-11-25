import { PathConstants } from "@/PathConstants";
import { ThemeProvider } from "@/context/theme-provider";
import { Divider } from "@/resources/components/ui";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-screen items-center">
        <div className="ml-96 flex flex-col gap-5">
          <p className="text-8xl font-bold">404</p>
          <h1 className="text-3xl font-bold">Oops! We Can't Find That Page</h1>
          <p className="text-xl">
            Hey there! It looks like the page you're looking for has gone
            missing
          </p>
          <div>
            <h2 className="mb-2 text-lg font-bold">
              Don't worry, we've got you covered:
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Check the URL:</strong> Maybe there's a typo?
                Double-check the web address.
              </li>
              <li>
                <strong>Head Home:</strong> Click{" "}
                <Link
                  to={PathConstants.DASHBOARD}
                  className="text-green-500 underline underline-offset-4"
                >
                  here
                </Link>{" "}
                to get back to dashboard.
              </li>
              <li>
                <strong>Need Help?</strong> If you think something's wrong,
                reach out to our support team. We're here to help!
              </li>
            </ul>
          </div>
          <Divider className="py-5" />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Quick links:</h2>
            <div className="flex flex-row gap-5">
              <Link
                className="text-green-500 underline underline-offset-4"
                to={PathConstants.DASHBOARD}
              >
                Dashboard
              </Link>
              <Link
                className="text-green-500 underline underline-offset-4"
                to={PathConstants.DASHBOARD}
              >
                Support
              </Link>
              <Link
                className="text-green-500 underline underline-offset-4"
                to={PathConstants.DASHBOARD}
              >
                FAQ
              </Link>
            </div>
            <p className="text-md mt-5">
              We're really sorry for the mix-up. Thanks for your patience!
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
