import React from "react";

const page = ({ params }: { params: { uid: string; slug: string } }) => {
  return (
    <div>
      User ID: {params.uid}, slug: {params.slug}
    </div>
  );
};

export default page;
