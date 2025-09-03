import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const brandLogos = [
  { src: "/rectangle-4185-1.png", className: "w-[115px] h-[77px]" },
  { src: "/rectangle-4182-1.png", className: "w-[100px] h-[100px]" },
  { src: "/rectangle-4186-1.png", className: "w-[152px] h-[115px]" },
  { src: "/rectangle-4189.png", className: "w-[146px] h-10" },
  { src: "/rectangle-4183-1.png", className: "w-[125px] h-[102px]" },
  { src: "/rectangle-4187-1.png", className: "w-[126px] h-[73px]" },
  { src: "/rectangle-4188-1.png", className: "w-[136px] h-[100px]" },
  { src: "/rectangle-4184-1.png", className: "w-[125px] h-[41px]" },
  { src: "/rectangle-4190-1.png", className: "w-[15px] h-[26px]" },
];

const productCards = [
  {
    image: "/rectangle-3849-1.png",
    title: "Active Inizio Azure",
    color: "White",
    price: "Rp 500rb/-",
  },
  {
    image: "/rectangle-3849.png",
    title: "Hageshi Beige",
    color: "White",
    price: "Rp 3999rb",
  },
  {
    image: "/rectangle-3849-2.png",
    title: "Gozen Black",
    color: "Blue",
    price: "Rp 499rb",
  },
  {
    image: "/rectangle-3849-3.png",
    title: "Corsa Classic",
    color: "Black",
    price: "Rp 500rb/-",
  },
  {
    image: "/rectangle-3849-4.png",
    title: "Ace neptune Charcoal",
    color: "White",
    price: "Rp 500rb/-",
  },
  {
    image: "/rectangle-3849-5.png",
    title: "Active Venturi Shappire",
    color: "White",
    price: "Rp 500rb/-",
  },
];

const testimonials = [
  {
    name: "Sundar Pichai",
    position: "CEO Google",
    avatar: "/ellipse-811.png",
    rating: "/group-1000001769.png",
    review:
      "STRIDE terasa modern, nyaman, dan dibuat dengan visi. Ini bukan sekadar sepatu, melainkan sebuah langkah menuju inovasi global.",
  },
  {
    name: "Alexey Miller",
    position: "CEO Gazprom",
    avatar: "/ellipse-812.png",
    rating: "/group-1000001770.png",
    review:
      "Sepatu STRIDE mengesankan dengan kualitas dan keandalannya. Seperti dalam energi, di sini penting kekuatan dan perspektif jangka panjang. STRIDE membuat langkah maju yang percaya diri.",
  },
  {
    name: "Oliver Blume",
    position: "CEO Volkswagen Group",
    avatar: "/ellipse-821.png",
    rating: "/group-1000001802.png",
    review:
      "STRIDE — это сочетание технологии и стиля. Как в цифровом мире, так и в моде, инновации определяют будущее. STRIDE — это умный шаг для нового поколения.",
  },
];

const advantages = [
  {
    number: "1",
    title: "Top Notch Quality",
    description:
      "At Spike we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability, and style.",
  },
  {
    number: "2",
    title: "Top Notch Quality",
    description:
      "At Spike we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability, and style.",
  },
  {
    number: "3",
    title: "Top Notch Quality",
    description:
      "At Spike we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability, and style.",
  },
];

const colorOptions = [
  { color: "bg-[#2a5ea9]" },
  { color: "bg-[#499bcf]" },
  { color: "bg-[#d5cecb]" },
  { color: "bg-[#e5ded9]" },
];

const strideRepeats = ["STRIDE", "STRIDE", "STRIDE", "STRIDE", "STRIDE"];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-[7581px] relative">
        {/* Fixed Navigation */}
        <nav className="fixed w-[1440px] h-[89px] top-0 left-0 bg-[#ffffff80] z-50">
          <div className="absolute w-[251px] h-[129px] top-0 left-6">
            <div className="top-[26px] left-[138px] [font-family:'Inter',Helvetica] font-normal text-black text-[40px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
              Stride
            </div>
            <img
              className="absolute w-[180px] h-[129px] top-0 left-0 object-cover"
              alt="Logo"
              src="/logo.png"
            />
          </div>
          <div className="left-[564px] absolute top-[31px] [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Home
          </div>
          <div className="absolute top-[31px] left-[704px] [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            About Us
          </div>
          <div className="left-[876px] absolute top-[31px] [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Product
          </div>
          <div className="absolute top-[31px] left-[1049px] [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Contact
          </div>
        </nav>

        {/* Hero Section */}
        <section className="absolute w-[1763px] h-[770px] top-24 left-32">
          <div className="absolute w-[1763px] h-[770px] top-0 left-0">
            <img
              className="w-[690px] top-[488px] left-[9px] absolute h-px object-cover"
              alt="Line"
              src="/line-3.svg"
            />
            <h1 className="absolute w-[966px] top-[225px] left-0 [font-family:'Inter',Helvetica] font-semibold text-black text-[64px] tracking-[0] leading-[normal]">
              SEPATU BERBICARA <br />
              LEBIH KERAS
              <br />
              DARIPADA KATA-KATA
            </h1>
            <p className="absolute top-[521px] left-2 [font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus,
              <br />
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="absolute w-[133px] h-[100px] top-[647px] left-[736px] bg-[#cbed62]" />
            <div className="absolute w-[133px] h-[100px] top-[647px] left-[903px] bg-[#cbed62]" />
            <div className="absolute w-[133px] h-[100px] top-[647px] left-[1070px] bg-[#cbed62]" />
            <img
              className="absolute w-[115px] h-24 top-[649px] left-[746px] object-cover"
              alt="Element"
              src="/5e5d9917-b79f-4281-bdcf-9f9dfe3cf461-2-e1722526044558-2-1.png"
            />
            <img
              className="absolute w-[166px] h-[166px] top-[604px] left-[882px] object-cover"
              alt="Nikecourt zoom vapor"
              src="/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cs7wct-.png"
            />
            <img
              className="absolute w-[127px] h-[116px] top-[639px] left-[1082px] object-cover"
              alt="Element"
              src="/15-e1722668524140-1-1024x884-1.png"
            />
            <div className="absolute w-[654px] h-[654px] top-0 left-[1109px] bg-black rounded-[327px]" />
            <div className="absolute top-[206px] left-[1099px] rotate-[-90.67deg] [font-family:'Karantina',Helvetica] font-normal text-[#ffffffe6] text-[200px] tracking-[0] leading-[199.9px] whitespace-nowrap">
              LOCAL
            </div>
            <img
              className="absolute w-[693px] h-[684px] top-[83px] left-[619px] object-cover"
              alt="Element"
              src="/5-1-1-1-1-2048x1866-1.png"
            />
          </div>
          <Button className="absolute w-[207px] h-[59px] top-[653px] left-[70px] bg-[#c0ff00] rounded-[23px] text-black hover:bg-[#a8d600] h-auto">
            <span className="[font-family:'Inter',Helvetica] font-normal text-xl">
              Temukan Sekarang
            </span>
          </Button>
          <div className="absolute top-[174px] left-[9px] [font-family:'Inter',Helvetica] font-medium text-[#cbed62] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            FEEL THE EXPERIENCE
          </div>
          <div className="absolute top-[670px] left-[336px] [font-family:'Karla',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            4.5 Rating
          </div>
          <StarIcon className="absolute w-7 h-7 top-[669px] left-[304px] fill-yellow-400 text-yellow-400" />
        </section>

        {/* Top Brands Section */}
        <section className="absolute w-[1440px] h-[115px] top-[1155px] left-0">
          <h2 className="absolute top-[969px] left-[571px] [font-family:'Karla',Helvetica] font-bold text-[#292929b2] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
            Top Brands
          </h2>
          <p className="absolute top-[1044px] left-[393px] [font-family:'Kantumruy_Pro',Helvetica] font-light text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            temukan sepatu impian Anda dari 5000+ koleksi
          </p>
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className={`absolute bg-cover bg-center ${logo.className}`}
              style={{
                backgroundImage: `url(${logo.src})`,
                top:
                  index === 0
                    ? "19px"
                    : index === 1
                      ? "8px"
                      : index === 2
                        ? "0px"
                        : index === 3
                          ? "38px"
                          : index === 4
                            ? "7px"
                            : index === 5
                              ? "21px"
                              : index === 6
                                ? "8px"
                                : index === 7
                                  ? "37px"
                                  : "45px",
                left:
                  index === 0
                    ? "0px"
                    : index === 1
                      ? "165px"
                      : index === 2
                        ? "315px"
                        : index === 3
                          ? "517px"
                          : index === 4
                            ? "713px"
                            : index === 5
                              ? "888px"
                              : index === 6
                                ? "1064px"
                                : index === 7
                                  ? "1250px"
                                  : "1425px",
              }}
            />
          ))}
        </section>

        {/* Product Showcase */}
        <section className="absolute w-[1440px] top-[1342px] left-0">
          <img
            className="absolute w-[766px] h-[1049px] top-0 left-0 object-cover"
            alt="Rectangle"
            src="/rectangle-7-1.png"
          />
          <Card className="absolute w-[674px] h-[579px] top-0 left-[766px] bg-[#ffffffad] rounded-none border-none shadow-none">
            <CardContent className="p-0 h-full relative">
              <div className="absolute w-[674px] h-[579px] top-0 left-0 bg-[url(/rectangle-7-1.png)] bg-cover bg-[50%_50%]" />
              <div className="absolute w-[674px] h-[579px] top-0 left-0 bg-[#ffffffad]" />
              <h3 className="absolute top-[172px] left-[67px] [font-family:'Kantumruy_Pro',Helvetica] font-medium text-[#3e3e3e] text-5xl tracking-[0] leading-[normal]">
                Lokal: Melangkah dengan <br />
                Gaya dan Nyaman.
              </h3>
              <p className="absolute w-[539px] top-[316px] left-[73px] [font-family:'Lohit_Bengali-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                Di Lokal, kami lebih dari sekadar brand yang menjual kembali
                sepatu; kami adalah kurator gaya dan kualitas. Dengan hasrat
                yang mendalam terhadap footwear, kami memilih setiap pasangnya
                dengan cermat, memastikan setiap langkah Anda adalah sebuah
                langkah penuh percaya diri yang mengedepankan gaya.
              </p>
              <Button className="absolute w-[172px] h-[49px] top-[468px] left-[73px] bg-black rounded-[23px] text-white hover:bg-gray-800 h-auto">
                <span className="[font-family:'Karla',Helvetica] font-normal text-xl">
                  Beli Sekarang
                </span>
              </Button>
            </CardContent>
          </Card>
          <img
            className="absolute w-[337px] h-[470px] top-[579px] left-[766px] object-cover"
            alt="Rectangle"
            src="/rectangle-8.png"
          />
          <img
            className="absolute w-[337px] h-[470px] top-[579px] left-[1103px] object-cover"
            alt="Rectangle"
            src="/rectangle-9.png"
          />
        </section>

        {/* Divider Lines */}
        <img
          className="w-[1440px] top-[2448px] left-0 absolute h-px object-cover"
          alt="Line"
          src="/line-4.svg"
        />
        <img
          className="w-[1440px] top-[2643px] left-0 absolute h-px object-cover"
          alt="Line"
          src="/line-4.svg"
        />

        {/* STRIDE Repeated Text */}
        <div className="absolute top-[2515px] left-0 w-full flex justify-between px-[113px]">
          {strideRepeats.map((text, index) => (
            <div
              key={index}
              className="[font-family:'Inter',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal]"
            >
              {text}
            </div>
          ))}
        </div>
        <div className="absolute top-[2536px] left-0 w-full flex justify-between px-[317px]">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-[21px] h-[21px] bg-[#d9d9d9]" />
          ))}
        </div>

        {/* Advantages Section */}
        <section className="absolute w-[1281px] h-[717px] top-[2715px] left-24">
          <div className="absolute w-[1281px] h-[717px] top-0 left-0">
            <div className="absolute w-[1192px] h-[682px] top-0 left-[89px]">
              <div className="absolute w-[184px] h-[184px] top-[170px] left-[760px] bg-[#0094e8] rounded-[92px] blur-[450px]" />

              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`absolute ${index === 0 ? "top-[242px]" : index === 1 ? "top-[419px]" : "top-[601px]"} left-0`}
                >
                  <div
                    className={`absolute w-[52px] h-[50px] ${index === 0 ? "top-[1px]" : index === 1 ? "top-[1px]" : "top-[1px]"} left-0`}
                  >
                    <div className="relative w-[50px] h-[50px] bg-black rounded-[25px]">
                      <div
                        className={`absolute top-[5px] ${index === 1 ? "left-[15px]" : index === 2 ? "left-3.5" : "left-[17px]"} [font-family:'Inter',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]`}
                      >
                        {advantage.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="absolute top-0 left-[89px] [font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[normal]">
                    {advantage.title}
                  </h3>
                  <p
                    className={`absolute ${index === 0 ? "top-[44px]" : index === 1 ? "top-[44px]" : "top-[44px]"} left-0 [font-family:'Inter',Helvetica] font-normal text-[#505050] text-xl tracking-[0] leading-[normal]`}
                  >
                    {advantage.description}
                  </p>
                </div>
              ))}

              {/* Product Detail Card */}
              <Card className="absolute w-[438px] h-[482px] top-[200px] left-[611px] bg-[#fffbfb] rounded-[29px] shadow-[0px_20px_30px_#0000001a] border-none">
                <CardContent className="p-0 relative h-full">
                  <div className="absolute w-[388px] h-[233px] top-[21px] left-[25px] bg-[#e4e4e4] rounded-[30px]" />
                  <h4 className="absolute top-[269px] left-[30px] [font-family:'Inter',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    BRODO- Running Active Venturi
                  </h4>
                  <div className="absolute flex gap-2 top-[350px] left-[30px]">
                    {colorOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`w-[21px] h-[21px] ${option.color} rounded-[10.5px]`}
                      />
                    ))}
                  </div>
                  <p className="absolute top-[306px] left-[30px] [font-family:'Inter',Helvetica] font-medium text-[#a8a1a1] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Color: White | Rp 500rb/-
                  </p>
                  <img
                    className="absolute w-[34px] h-[34px] top-[429px] left-[31px] object-cover"
                    alt="Ellipse"
                    src="/ellipse-804.png"
                  />
                  <p className="absolute top-[436px] left-[74px] [font-family:'Inter',Helvetica] font-medium text-[#7e7777] text-sm tracking-[0] leading-[normal]">
                    1000+ People Bought
                  </p>
                </CardContent>
              </Card>

              {/* Review Card */}
              <Card className="absolute w-[303px] h-[159px] top-[456px] left-[889px] bg-[#f2f2f2] rounded-[18px] shadow-[0px_20px_30px_#0000001a] border-none">
                <CardContent className="p-0 relative h-full">
                  <img
                    className="absolute w-[67px] h-[67px] top-[17px] left-[25px] object-cover"
                    alt="Ellipse"
                    src="/ellipse-805.png"
                  />
                  <div className="absolute top-[16px] left-[116px] [font-family:'Inter',Helvetica] font-bold text-[#a8a1a1] text-[8px] tracking-[0] leading-[normal]">
                    Verified Customer
                  </div>
                  <div className="absolute top-[40px] left-[116px] [font-family:'Inter',Helvetica] font-bold text-black text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Best Shoes Ever!!
                  </div>
                  <div className="absolute flex gap-1 top-[61px] left-[116px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="w-3 h-3 bg-[#d9d9d9] rounded-md"
                      />
                    ))}
                  </div>
                  <p className="absolute w-[178px] top-[86px] left-[113px] [font-family:'Inter',Helvetica] font-normal text-[#505050] text-[7px] tracking-[0] leading-[normal]">
                    Ini adalah ultimate embodiment dari style, comfort, dan
                    durability. Desainnya yang eye-catching dan trend-setting
                    berpadu sempurna dengan kenyamanan yang unparalleled dan
                    konstruksi yang built to last. Benar-benar a game-changer
                    untuk koleksi sepatu apa pun
                  </p>
                  <div className="absolute top-[109px] left-[25px] [font-family:'Inter',Helvetica] font-bold text-black text-[8px] tracking-[0] leading-[normal]">
                    Nike Air A5000
                  </div>
                  <div className="absolute top-[124px] left-[25px] [font-family:'Inter',Helvetica] font-semibold text-[#a8a1a1] text-[8px] tracking-[0] leading-[normal]">
                    Color: White
                  </div>
                  <img
                    className="absolute w-[29px] h-[29px] top-[134px] left-[101px]"
                    alt="Frame"
                    src="/frame.svg"
                  />
                </CardContent>
              </Card>

              <img
                className="absolute w-[617px] h-[617px] top-0 left-[485px] object-cover"
                alt="Untitled design"
                src="/untitled-design--2--1.png"
              />
            </div>
            <h2 className="absolute top-[42px] left-0 [font-family:'Inter',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              At Local Shoes
            </h2>
            <h3 className="absolute w-[551px] top-[88px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
              Have Adventage :
            </h3>
          </div>
        </section>

        {/* Local Collection Section */}
        <section className="absolute w-full top-[3651px] left-0">
          <h2 className="absolute w-[551px] top-0 left-[101px] [font-family:'Inter',Helvetica] font-medium text-black text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
            Local Collection
          </h2>

          {/* Product Grid */}
          <div className="absolute top-[116px] left-[92px] grid grid-cols-3 gap-[48px]">
            {productCards.map((product, index) => (
              <Card
                key={index}
                className="w-[404px] h-[494px] shadow-[0px_20px_30px_#0000001a] border-none"
              >
                <CardContent className="p-0 relative h-full bg-[#fffefe] rounded-[29px]">
                  <img
                    className="absolute w-[339px] h-[236px] top-[39px] left-[30px] rounded-[29px] object-cover"
                    alt="Rectangle"
                    src={product.image}
                  />
                  <h3 className="absolute w-[260px] top-[316px] left-[39px] [font-family:'Inter',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                    {product.title}
                  </h3>
                  <div className="absolute top-[390px] left-[39px] flex items-center gap-2">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#a8a1a1] text-lg tracking-[0] leading-[normal]">
                      Color: {product.color}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#a8a1a1] text-base tracking-[0] leading-[normal]">
                      |
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#a8a1a1] text-lg tracking-[0] leading-[normal]">
                      {product.price}
                    </span>
                  </div>
                  <img
                    className="absolute w-[33px] h-[33px] top-[316px] left-[327px]"
                    alt="Frame"
                    src="/frame.svg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* View More Button */}
        <Button className="absolute w-[300px] h-[86px] top-[4954px] left-[576px] bg-black rounded-[27px] shadow-[0px_10px_20px_#00000040] hover:bg-gray-800 h-auto">
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
            View More
          </span>
        </Button>

        {/* Customer Opinion Section */}
        <section className="absolute w-[1440px] h-[961px] top-[5216px] left-0 bg-[url(/mzgltva3of-1.png)] bg-cover bg-[50%_50%]">
          <h2 className="absolute w-[587px] top-[29px] left-[427px] [font-family:'Inter',Helvetica] font-semibold text-[#fffefe] text-[64px] tracking-[0] leading-[normal] whitespace-nowrap">
            Customer Opinion
          </h2>
          <p className="absolute top-36 left-[426px] [font-family:'Inter',Helvetica] font-medium text-[#fffefe] text-center text-xl tracking-[0] leading-[normal]">
            At Spike we take pride in offering the finest footwear crafted{" "}
            <br />
            with precision and dedication. Step into unmatched comfort, <br />
            durability, and style.
          </p>

          {/* Testimonial Cards */}
          <div className="absolute top-80 left-[161px] flex gap-[65px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-[330px] h-[405px] bg-white rounded-[35px] shadow-
[0px_20px_30px_#0000001a] border-none"
              >
                <CardContent className="p-0 relative h-full">
                  <h3 className="absolute w-[183px] top-[61px] left-[39px] [font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Best Shoes
                  </h3>
                  <img
                    className="absolute w-[109px] h-[19px] top-[116px] left-[43px]"
                    alt="Group"
                    src={testimonial.rating}
                  />
                  <p className="absolute w-[259px] top-[157px] left-[43px] [font-family:'Mukta_Malar',Helvetica] font-light text-black text-[15px] tracking-[0] leading-[normal]">
                    "{testimonial.review}"
                  </p>
                  <img
                    className="absolute w-[51px] h-[51px] top-[317px] left-[43px] object-cover"
                    alt="Ellipse"
                    src={testimonial.avatar}
                  />
                  <div className="absolute w-[183px] top-[325px] left-[106px] [font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                    {testimonial.name}
                  </div>
                  <div className="absolute w-[183px] top-[348px] left-[106px] [font-family:'Inter',Helvetica] font-light text-black text-[10px] tracking-[0] leading-[normal]">
                    {testimonial.position}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="absolute top-[804px] left-[670px] [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
            See All Review
          </div>
        </section>

        {/* Contact Section */}
        <section className="absolute w-[1323px] h-[737px] top-[6290px] left-[59px]">
          <div className="absolute w-[1014px] h-[737px] top-0 left-[309px] overflow-hidden shadow-[0px_10px_20px_#00000040]">
            <div className="relative w-[1200px] h-[1200px] top-[-281px] -left-52">
              <div className="absolute w-[878px] h-[638px] top-[281px] left-52 bg-[#d9d9d9]" />
              <div className="absolute w-[1200px] h-[1200px] top-0 left-0">
                <div className="relative w-[992px] h-[737px] top-[281px] left-52 bg-[url(/basemap-image.png)] bg-[100%_100%]">
                  <div className="relative w-4 h-5 top-[278px] left-[492px] bg-[url(/frame-6.svg)] bg-[100%_100%]" />
                </div>
              </div>
            </div>
          </div>

          <Card className="absolute w-[541px] h-[658px] top-[46px] left-0 bg-white rounded-[31px] shadow-[0px_10px_20px_#00000040] border-none">
            <CardContent className="p-0 relative h-full">
              <h2 className="absolute w-[422px] top-[110px] left-[42px] [font-family:'Inter',Helvetica] font-semibold text-[#524c4c] text-[64px] tracking-[0] leading-[normal]">
                Contact us
              </h2>

              {/* PhoneIcon */}
              <div className="absolute w-[62px] h-[62px] top-[213px] left-[39px] bg-[#d9d9d9] rounded-[31px] flex items-center justify-center">
                <PhoneIcon className="w-[38px] h-[38px]" />
              </div>
              <div className="absolute top-[212px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                No telepon
              </div>
              <div className="absolute top-[241px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                +6289506147763
              </div>

              {/* Address */}
              <div className="absolute w-[62px] h-[62px] top-[327px] left-[39px] bg-[#d9d9d9] rounded-[31px] flex items-center justify-center">
                <MapPinIcon className="w-[39px] h-[39px]" />
              </div>
              <div className="absolute top-[314px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Address
              </div>
              <div className="absolute w-[396px] top-[343px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl tracking-[0] leading-[normal]">
                Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea,
                Kabupaten Bogor, Jawa Barat 16620
              </div>

              {/* Hours */}
              <div className="absolute w-[62px] h-[62px] top-[441px] left-[39px] bg-[#d9d9d9] rounded-[31px] flex items-center justify-center">
                <ClockIcon className="w-[38px] h-[38px]" />
              </div>
              <div className="absolute top-[447px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                opening hours
              </div>
              <div className="absolute top-[476px] left-[120px] [font-family:'Inter',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Everyday, 8:00 Am to 22:00 Pm
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="absolute w-[1499px] h-[419px] top-[7184px] left-[-30px] bg-[#1e1e1e]">
          <div className="absolute w-[653px] h-[179px] top-[26px] left-[98px]">
            <div className="absolute w-[653px] h-[179px] top-0 left-0">
              <div className="absolute w-[653px] h-[99px] top-0 left-0">
                <div className="w-[587px] top-1.5 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[64px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                  Stride
                </div>

                {/* Company Column */}
                <div className="absolute left-[377px] top-0 [font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Company
                </div>
                <div className="absolute top-[47px] left-[377px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  About us
                </div>
                <div className="left-[377px] absolute top-[81px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Product
                </div>

                {/* Second Company Column */}
                <div className="left-[560px] absolute top-0 [font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Company
                </div>
                <div className="absolute top-[47px] left-[560px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  About us
                </div>
                <div className="left-[560px] absolute top-[81px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Product
                </div>
              </div>

              <div className="flex flex-col items-start gap-1.5 absolute w-[292px] h-[86px] top-[93px] left-0">
                <div className="relative self-stretch font-normal text-white text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0]">
                    Elevate your step with Stride - where style
                    <br />
                  </span>
                </div>
                <div className="relative self-stretch font-normal text-white text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0]">
                    meets comfort seamlessly. Our meticulously
                    <br />
                  </span>
                </div>
                <div className="relative self-stretch font-normal text-white text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0]">
                    crafted shoes redefine fashion, ensuring
                    <br />
                  </span>
                </div>
                <div className="relative self-stretch font-normal text-white text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0]">
                    each stride is a statement
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-[115px] left-[377px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Contact us
            </div>
            <div className="top-[115px] left-[560px] font-normal text-white text-[15px] whitespace-nowrap absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
              Contact us
            </div>
            <div className="left-[379px] absolute top-[149px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              FAQ
            </div>
            <div className="left-[562px] absolute top-[149px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              FAQ
            </div>
          </div>

          <div className="left-[475px] absolute top-[209px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            Testimonial
          </div>
          <div className="left-[658px] absolute top-[209px] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            Testimonial
          </div>

          {/* Newsletter Section */}
          <div className="absolute top-[55px] left-[1124px] [font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
            Newsletter
          </div>
          <div className="absolute w-[426px] h-[63px] top-[125px] left-[997px] bg-[#4b4b4b] rounded-[20px] flex items-center">
            <Input
              className="absolute top-[19px] left-[33px] bg-transparent border-none text-white placeholder:text-white [font-family:'Inter',Helvetica] font-normal text-xl"
              placeholder="Your email address"
            />
            <SendIcon className="absolute w-[51px] h-[51px] top-1.5 left-[370px] text-white" />
          </div>

          {/* Social Media Icons */}
          <div className="absolute w-[25px] h-[25px] top-[258px] left-[98px] bg-[#d9d9d9] rounded-[12.5px] flex items-center justify-center">
            <TwitterIcon className="w-3 h-3" />
          </div>
          <div className="absolute w-[25px] h-[25px] top-[258px] left-[140px] bg-[#d9d9d9] rounded-[12.5px] flex items-center justify-center">
            <FacebookIcon className="w-3 h-3" />
          </div>
          <div className="absolute w-[25px] h-[25px] top-[258px] left-[182px] bg-[#d9d9d9] rounded-[12.5px] flex items-center justify-center">
            <InstagramIcon className="w-[19px] h-[19px]" />
          </div>
        </footer>
      </div>
    </div>
  );
};
