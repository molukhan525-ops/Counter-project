// // image1
// // import React from 'react'
// // import './App.css'
// // import image1 from "./assets/img_files/madara.png"


// // // card
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

// // // navbar
// // import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';


// // // web
// // import "./Navbar.css";






























// // function App() {


// //   const Name = "Abdul Rehman"

// //   const Worker = {
// //     Name: "Usman",
// //     Age: 29,
// //     Work: "Packing Manager",
// //     Salary: "75 thousand"
// //   }

// //   return (



// // <div className='new'>

// //   <h1>Gul Ahmed</h1>
// //   <h2>{Name}</h2>

// //   <p>{Worker.Salary}</p>

// //   <h1>If You read this then ok you are not blind</h1>

// //   <img width={'100%'} src={image1} alt='' />

// // </div>

// // <Card style={{ width: '100%' }}>
// //   <Card.Img variant="top" src={image1} />
// //   <Card.Body>
// //     <Card.Title>Card Title</Card.Title>
// //     <Card.Text>
// //       Some quick example text to build on the card title and make up the
// //       bulk of the card's content.
// //     </Card.Text>
// //     <Button variant="primary">Go somewhere</Button>
// //   </Card.Body>
// // </Card>
// // <Navbar expand="lg" className="bg-body-warning">
// //   <Container fluid>
// //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
// //     <Navbar.Toggle aria-controls="navbarScroll" />
// //     <Navbar.Collapse id="navbarScroll">
// //       <Nav
// //         className="me-auto my-2 my-lg-0"
// //         style={{ maxHeight: '100px' }}
// //         navbarScroll
// //       >
// //         <Nav.Link href="#action1">Home</Nav.Link>
// //         <Nav.Link href="#action2">Link</Nav.Link>
// //         <NavDropdown title="Link" id="navbarScrollingDropdown">
// //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
// //           <NavDropdown.Item href="#action4">
// //             Another action
// //           </NavDropdown.Item>
// //           <NavDropdown.Divider />
// //           <NavDropdown.Item href="#action5">
// //             Something else here
// //           </NavDropdown.Item>
// //         </NavDropdown>
// //         <Nav.Link href="#" disabled>
// //           Link
// //         </Nav.Link>
// //       </Nav>
// //       <Form className="d-flex">
// //         <Form.Control
// //           type="search"
// //           placeholder="Search"
// //           className="me-2"
// //           aria-label="Search"
// //         />
// //         <Button variant="outline-success">Search</Button>
// //       </Form>
// //     </Navbar.Collapse>
// //   </Container>
// // </Navbar>

// // 

// //   )

// // }







// // const studentsData = [
// //   {
// //     fullName: "muhammad noman",
// //     age: 21,
// //     city: "karachi"
// //   },
// //   {
// //     fullName: "muhammad Asad",
// //     age: 21,
// //     city: "Lahore"
// //   },
// //   {
// //     fullName: "muhammad Anas",
// //     age: 21,
// //     city: "Islamabad"
// //   },
// // ]





// {/* <ul>
//         {
//           studentsData.map((value, index) => {
//             return (
//               <li key={index}>{value.fullName}</li>
//             )
//           })
//         }
//       </ul> */}



// // function App() {

// //   const WorkersData = [
// //     {
// //       Name: "Ali",
// //       Age: 35,
// //       Work: "Packing Manager"
// //     },


// //     {
// //       Name: "Aslam",
// //       Age: 45,
// //       Work: "Boss"
// //     },


// //     {
// //       Name: "Atif",
// //       Age: 39,
// //       Work: "Security Guard"
// //     },


// //     {
// //       Name: "Arif",
// //       Age: 33,
// //       Work: "Driver"
// //     },
// //   ]


// //   return (

// //     <ul>
// //       {

// //         WorkersData.map((value, index) => {
// //           return (
// //             <li key={index}>{value.Work}</li>
// //           )

// //         })
// //       }
// //     </ul>

// //   )
// // }




// // function App() {

// //   const WorkersData = [
// //     {
// //       Name: "Ali",
// //       Age: 35,
// //       Work: "Packing Manager"
// //     },


// //     {
// //       Name: "Aslam",
// //       Age: 45,
// //       Work: "Boss"
// //     },


// //     {
// //       Name: "Atif",
// //       Age: 39,
// //       Work: "Security Guard"
// //     },


// //     {
// //       Name: "Arif",
// //       Age: 33,
// //       Work: "Driver"
// //     },
// //   ]

// //   return (
// //     <div>
// //       <ul>
// //         {

// //           WorkersData.map((v, index) => {
// //             return (
// //               <li key={index}>{v.Age}</li>
// //             )
// //           }

// //           )

// //         }
// //       </ul>
// //     </div >
// //   )
// // }







// // slide
// import Carousel from 'react-bootstrap/Carousel';
// import img from './assets/img_files/gojo.png';

// // navbar
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function App() {
//   return (

//     <div className="main bg-black">

//       <Navbar expand="lg" className="bg-black navbar-dark">
//         <Container>
//           <img width={"170px"} src="https://images-beta.tossdown.com/site/65b73fb7-2706-4440-87b9-9555fcd0ba80.webp" alt="" />
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto align-items-center">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About Us</Nav.Link>
//               <Nav.Link href="#publication">Publications</Nav.Link>
//               <button className='btn btn-outline-light rounded-pill p-lg-3 mx-3' >Get a Franchise</button>
//               <button className='btn btn-danger rounded-pill p-lg-3 mx-3'>Order Online</button>

//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>



//       <Carousel>
//         <Carousel.Item interval={1000}>
//           {/* <ExampleCarouselImage text="First slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/a540d7af-570b-4136-aee3-080ea4928f88.webp" alt="" />
//           <Carousel.Caption>

//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={500}>
//           {/* <ExampleCarouselImage text="Second slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/48530090-fbc2-414f-9028-05086a940b88.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/49de878c-0ef7-474a-989f-5bec8dd2ca1b.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/577429c2-3b58-4be5-a56a-d1453922516f.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/01413b7a-9edc-45f7-8326-6694e542c0d8.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/81777993-a226-4c3e-bd3f-0401e68fa6f2.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           {/* <ExampleCarouselImage text="Third slide" /> */}
//           <img width={"100%"} src="https://static.tossdown.com/images/9a67eb21-e21d-4409-b846-e24fb2cfc313.webp" alt="" />
//           <Carousel.Caption>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>



//       <section>
//         <div
//           className="container-fluid"
//           style={{
//             backgroundColor: "black",
//             minHeight: "100vh",
//             paddingTop: "70px",
//             paddingBottom: "60px",
//           }}
//         >
//           {/* Heading */}
//           <div className="text-center" style={{ color: "white", marginBottom: "35px" }}>
//             <h1
//               style={{
//                 fontSize: "38px",
//                 fontWeight: "300",
//                 margin: "0",
//                 lineHeight: "1.35",
//               }}
//             >
//               Welcome to{" "}
//               <span
//                 style={{
//                   fontFamily: "'Times New Roman', serif",
//                   fontWeight: "900",
//                   fontSize: "42px",
//                   letterSpacing: "-3px",
//                 }}
//               >
//                 Salt'n Pepper
//               </span>
//               <br />
//               Restaurants! Our Brands
//             </h1>

//             <p
//               style={{
//                 fontSize: "16px",
//                 marginTop: "10px",
//                 color: "#d0d0d0",
//               }}
//             >
//               Please click our brands below for further information, reservations or
//               to order online!
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="container">
//             <div className="row justify-content-center text-center">

//               {/* Card 1 */}
//               <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "4px",
//                     height: "140px",
//                     padding: "14px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src="https://static.tossdown.com/site/8a66dd76-03d2-4b71-8d03-cf045f0248a7.webp"
//                     alt="Salt'n Pepper Restaurant"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>

//                 <button
//                   className="btn btn-outline-light rounded-pill"
//                   style={{
//                     marginTop: "24px",
//                     padding: "12px 48px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Card 2 */}
//               <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "4px",
//                     height: "140px",
//                     padding: "14px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src="https://static.tossdown.com/site/9d9cb355-ac8c-404e-a608-c28242343cd1.webp"
//                     alt="Salt'n Pepper Express"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>

//                 <button
//                   className="btn btn-outline-light rounded-pill"
//                   style={{
//                     marginTop: "24px",
//                     padding: "12px 48px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Order Now
//                 </button>
//               </div>

//               {/* Card 3 */}
//               <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "4px",
//                     height: "140px",
//                     padding: "14px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src="https://static.tossdown.com/site/f9238d0e-7c34-4139-a081-c57b7713628e.webp"
//                     alt="Salt'n Pepper Village"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>

//                 <button
//                   className="btn btn-outline-light rounded-pill"
//                   style={{
//                     marginTop: "24px",
//                     padding: "12px 40px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Reserve a Table
//                 </button>
//               </div>

//               {/* Card 4 */}
//               <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-5">
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "4px",
//                     height: "140px",
//                     padding: "14px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src="https://static.tossdown.com/images/38f64422-c79a-4650-8df2-5668743154df.webp"
//                     alt="Salt'n Pepper Restaurant"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>

//                 <button
//                   className="btn btn-outline-light rounded-pill"
//                   style={{
//                     marginTop: "24px",
//                     padding: "12px 48px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Order Now
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>



//       </section>
//     </div>

//   )
// }

// import NavbarMui from "./component/NavbarMui";
// import PracticeMui from "./component/PracticeMui";
// import ModalsMui from "./component/ModalsMui";
// import Antdlayout from "./component/Antdlayout";



// import Car from "./component/Props.jsx";

// import Card from "./component/Card"
// import "./App.css"
// function App() {


//   const data = [
//     {
//       carname: "BMW M3 Competition Touring (Frozen Black / Black Sapphire)",
//       price: <b> <i>$115,000 USD</i> </b>,
//       details: "The ultimate high-performance sports wagon. It combines supercar-level acceleration and M-xDrive all-wheel drive handling with everyday practicality. Styled in a dark blacked-out spec, it has an incredibly aggressive front stance paired with a wide, muscular estate rear profile.",
//       image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0lNwbQQs2hNf9mUUqPImjfS4lw6aCDX9pJzk1Xkw23pV9K0oEptqd-SAjQ46O",
//       button: "Place Order"
//     },

//     {
//       carname: "BMW M8 Competition Gran Coupé (Sapphire Black)",
//       price: <b> <i>$138,800 USD</i> </b>,
//       details: "Widely considered one of BMW's absolute best-looking models. It combines aggressive supercar performance with a sleek, low-slung four-door coupé design. In all-black, it gives off ultimate stealth and luxury vibes.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_QnwGIzBPmCLNyndPySvkH76SWbTje9dOxJhSsgNiAU1ZclpLn9yvpO_&s=10",
//       button: "Place Order"
//     },

//     {
//       carname: "BMW M5 Competition (Frozen Black)",
//       price: <b> <i>$120,000 USD</i> </b>,
//       details: "The ultimate high-performance sport sedan. In a Frozen Black (matte finish) or metallic black spec, it has a menacing, muscular stance while maintaining practical four-door everyday usability.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtM7Vx6mLEi-B_c0xAdg5CdZEXUL2jWPRJ9E1nY1cNGYqMOhIE4dKT-UE&s=10",
//          button: "Place Order"
//     },

//     {
//       carname: "BMW XM Label (Frozen Carbon Black)",
//       price: <b> <i>$185,000 USD</i> </b>,
//       details: "The most powerful standalone BMW M vehicle ever made. In a dark or matte black spec with contrasting dark trim and red accents, it features an ultra-futuristic, sharp angular body with massive road presence and a luxurious lounge-like interior.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckRIJj9YA6tHk5oaS-WRRQvda4499LYiigOGJBQKaVSUAjnbe1w0KRzFIAw7N",
//          button: "Place Order"
//     }
//   ]


//   return (
//     <div className="main">

//       {/* <NavbarMui />
//       <PracticeMui /> */}

//       {/* <ModalsMui/> */}
//       {/* <Antdlayout /> */}


//       {/* <Car data={data} /> */}

//       {

//         data.map((_value, _index) => {
//           return (
//             <Card key={_index} cname={_value.carname} price={_value.price} det={_value.details} img={_value.image} but={_value.button} />
//           )
//         }
//         )
//       }



//     </div>
//   )
// }



// export default App;










import { Margin, Padding, Widgets } from "@mui/icons-material"
import { useState } from "react"
// import Counter from "./component/Counter.jsx"
import Todo from "./component/TodoApp.jsx"

function App() {
  //   const [paragraph, setparagraph] = useState("Hello I am Gemini")

  //   return (

  //     <div style={{
  //       border: "3px solid blue",
  //       textAlign: "center",
  //       width: "500px",
  //       borderRadius: "66px",
  //       margin: "auto",
  //       marginTop: "240px"
  //     }}>


  //       <h2
  //         style={{
  //           textAlign: "center",
  //           fontSize: "28px",
  //           marginBottom: "20px",
  //           marginTop: "30px",
  //           fontFamily: "Impact"
  //         }}
  //       >
  //         Use State
  //       </h2>


  //       <h3 style={{
  //         textAlign: "center",
  //         fontSize: "28px",
  //         marginBottom: "20px"

  //       }}>{paragraph}</h3>


  //       <button onClick={() => setparagraph("Hello I am ChatGPT")}
  //         style={{
  //           border: "none",
  //           borderRadius: "9px",
  //           backgroundColor: "blue",
  //           color: "white",
  //           fontSize: "28px",
  //           marginBottom: "30px",
  //           fontFamily: "Impact",
  //           boxShadow: "3px 5px 6px black"
  //         }}>CHANGE</button>


  //     </div>
  //   )



  return (
    <div>
      {/* <Counter /> */}
      <Todo />
    </div>
  )

}


export default App