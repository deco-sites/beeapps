import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(5).fill(5).map(() => ({
  src:
    "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/beeapps/00e5e919-90ff-486b-8d4d-a7a536ca37a2/png-transparent-aws-vector-brand-logos-icon-thumbnail.png",
  altText: "Logo",
}));

export default function Logos({
  title = "Edit this heading however you want",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={110}
            height={110}
          />
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-12">
        <p class="text-center text-lg">{title}</p>
        <div class="relative w-full h-full overflow-hidden">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-full">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
