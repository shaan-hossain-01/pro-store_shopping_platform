import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              width={48}
              height={48}
              priority={true}
            />
            <span className="hidden lg:block ml-3 font-bold text-2xl">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
