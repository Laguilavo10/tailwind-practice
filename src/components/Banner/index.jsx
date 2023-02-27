import { useState } from "react"
import { SearchSVG } from "../Icons"

export function Banner() {
  let bannerUrl =
    "https://s3-alpha-sig.figma.com/img/3730/dc96/bd2ab7387bb2bce36d760dd70837cffd?Expires=1678060800&Signature=F4x3cVQbwdVItDl3HkgKAT8a6kWzxuGo6m6iPmv5p2X1bBvs8-vj7W3TW8jRZy-Mno-ZlDrA8HsySxZcqD9dXzySBL8Trt-4PHCGFFyqzRyrIYxDFYCYw6Rzflt4Xr0kgbSyOPBJDqeoM1LOwn5nV0~DI53R7aoJjSUSlepEgaC~6eSrf79m~kpDVT8o5PkF1irEtDFBSt1D4Vz9wrUqQ3gDN1OTegd4G0CSaFsPjH2PG81Zp0keBwf37qRcK~om~r1bMgpWZWsNbzz5zMlC4YoCCrlgJ3qZFmGsuPFx9Dz0RC9jU-0ePk3QMhWEt~Tcb2sTc2nfPv0ycMh-dtv0zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

  return (
    <>
      <div
        id="main"
        className="relative flex h-[calc(100vh_-_75px)] flex-col justify-center p-12 max-sm:items-center max-sm:justify-between"
      >
        <img
          src={bannerUrl}
          alt="banner"
          className="absolute top-0 left-0 h-full w-full object-cover object-left-top"
        />
        {/* <div className="flex flex-col gap-4 justify-center "> */}
        <h1 className="relative z-10 flex flex-col font-montserrat text-3xl font-extrabold tracking-wider max-sm:hidden">
          Find More Locations <span className="">like this</span>
        </h1>
        <div className="relative flex w-full justify-center gap-3 rounded-3xl bg-white py-4 px-2 sm:hidden max-sm:shadow-2xl">
          {SearchSVG(true)}
          <input
            type="text"
            placeholder="San Francisco"
            className="w-full max-w-[150px] outline-none"
          />
        </div>
        <button className="text relative z-10 mt-8 w-fit rounded-full bg-white py-4 px-6 text-primary shadow-lg">
          Explore More
        </button>
        {/* </div> */}
      </div>
    </>
  )
}
