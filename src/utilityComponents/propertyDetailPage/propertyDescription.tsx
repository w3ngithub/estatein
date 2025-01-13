import { AreaIcon, BedIcon, ShowerIcon } from "@/svgs/PropertyDetailPageSvg";

export const propertyDescription = [
  {
    description:
      "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
    details: [
      {
        icon: <BedIcon />,
        label: "Bedrooms",
        value: "04",
      },
      {
        icon: <ShowerIcon />,
        label: "Bathrooms",
        value: "03",
      },
      {
        icon: <AreaIcon />,
        label: "Area",
        value: "2,500 Square Feet",
      },
    ],
    features: [
      {
        id: 1,
        features: "Expansive oceanfront terrace for outdoor entertaining",
      },
      { id: 2, features: "Gourmet kitchen with top-of-the-line appliances" },
      {
        id: 3,
        features: "Private beach access for morning strolls and sunset views",
      },
      {
        id: 4,
        features:
          "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      },
      { id: 5, features: "Private garage and ample storage space" },
    ],
  },
];
