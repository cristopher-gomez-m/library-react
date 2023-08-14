import {Input} from "@nextui-org/input";
const form = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form className="space-y-4">
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="password" label="Password" placeholder="Enter your password" />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
};

export default form;
