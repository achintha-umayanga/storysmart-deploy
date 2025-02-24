import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">StorySmart</h3>
            <p className="text-sm">Transforming learning through stories</p>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
              {/* Example: */}
              {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a> */}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Features
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                How to Play
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Team
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Colombo, Sri Lanka
              </p>
              <p className="text-sm flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (+94) 76 0909823
              </p>
              <p className="text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contactstorysmart@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} StorySmart. All Rights Reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

