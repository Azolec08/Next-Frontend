import React from "react";

type childrenType = {
  children: React.ReactNode;
};

export default function layout({ children }: childrenType) {
  return (
    <section>
      <div className="flex w -full justify-center p-2 bg-gray-200">
        <h1> Slug Nvbar</h1>
      </div>
      {children}
    </section>
  );
}
