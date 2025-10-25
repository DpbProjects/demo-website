import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CategoryCard: React.FC<{
  image: string;
  title: string;
  href: string;
}> = ({ image, title, href }) => {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-shadow bg-neutral-100">
      <div className="pt-16 pb-6 px-6 text-center">
        <div className="relative aspect-square max-w-[200px] mx-auto mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-bold tracking-wider mb-4">{title}</h3>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#D87D4A] transition-colors"
        >
          SHOP <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default CategoryCard;
