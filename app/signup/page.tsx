import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f6f1fd] flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-purple-100 w-full max-w-md p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-500 text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-[#7C3AED] font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@school.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3 rounded-full transition-colors shadow-md mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-[#7C3AED] hover:underline">Terms of Service</a>{" "}
          and{" "}
          <a href="#" className="text-[#7C3AED] hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
