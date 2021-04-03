import React from 'react';
import { NextPageContext } from 'next';

function Home({ data }) {
  return (
    <div>
      <div className="bg-secondary-dark p-10">
        <div className="flex ">
          <div className="w-10 h-10 bg-error-light"></div>
          <div className="w-10 h-10 bg-success-light"></div>
          <div className="w-10 h-10 bg-info-light"></div>
          <div className="w-10 h-10 bg-warning-light"></div>
          <div className="w-10 h-10 bg-question-light"></div>
        </div>
        <div className="flex ">
          <div className="w-10 h-10 bg-error"></div>
          <div className="w-10 h-10 bg-success"></div>
          <div className="w-10 h-10 bg-info"></div>
          <div className="w-10 h-10 bg-warning"></div>
          <div className="w-10 h-10 bg-question"></div>
        </div>
        <div className="flex ">
          <div className="w-10 h-10 bg-error-dark"></div>
          <div className="w-10 h-10 bg-success-dark"></div>
          <div className="w-10 h-10 bg-info-dark"></div>
          <div className="w-10 h-10 bg-warning-dark"></div>
          <div className="w-10 h-10 bg-question-dark"></div>
        </div>

        <div className="text-heading-light text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading-dark text-2xl mb-5">Dummy Heading</div>

        <div className="text-body-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body-dark">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>
      </div>

      <div className="bg-primary p-10">
        <div className="text-white text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading-light text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading-dark text-2xl mb-5">Dummy Heading</div>

        <div className="text-body-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body-dark">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>
      </div>

      <div className="bg-dark p-10">
        <div className="text-white text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading-light text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading text-2xl mb-5">Dummy Heading</div>
        <div className="text-heading-dark text-2xl mb-5">Dummy Heading</div>

        <div className="text-body-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>

        <div className="text-body-dark">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat fuga,
          repellat, id ipsa commodi maxime expedita quas totam ducimus numquam
          quisquam ipsum corporis? Illum, ipsam ut voluptates explicabo ullam
          animi.\\ Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Fugiat fuga, repellat, id ipsa commodi maxime expedita quas totam
          ducimus numquam quisquam ipsum corporis? Illum, ipsam ut voluptates
          explicabo ullam animi.\\ Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Fugiat fuga, repellat, id ipsa commodi maxime
          expedita quas totam ducimus numquam quisquam ipsum corporis? Illum,
          ipsam ut voluptates explicabo ullam animi.\\ Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Fugiat fuga, repellat, id ipsa
          commodi maxime expedita quas totam ducimus numquam quisquam ipsum
          corporis? Illum, ipsam ut voluptates explicabo ullam animi.\\
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      data: ctx.query,
    },
  };
}

export default Home;
