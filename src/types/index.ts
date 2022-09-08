export interface ImageInterface {
  id: number;
  alt: string;
  src: string;
  type: string;
}

export interface LinkInterface {
  id: number;
  name: string;
  href: string;
}

export interface ProjectInterface {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: ImageInterface[];
  links: LinkInterface[];
}
