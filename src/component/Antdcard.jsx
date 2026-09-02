// import React, { useState } from 'react';
// import {
//     EditOutlined,
//     EllipsisOutlined,
//     SettingOutlined,
//     StarFilled,
// } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';

// const { Meta } = Card;

// const Antdcard = () => {
//     const [cardHover, setCardHover] = useState(false);
//     const [activeButton, setActiveButton] = useState(null);
//     const [exploreHover, setExploreHover] = useState(false);

//     const actionStyle = (name) => ({
//         fontSize: 20,
//         cursor: 'pointer',

//         color: activeButton === name ? '#00e5ff' : '#777',

//         transform:
//             activeButton === name
//                 ? 'scale(1.25) rotate(8deg)'
//                 : 'scale(1)',

//         transition: 'all 0.3s ease',

//         filter:
//             activeButton === name
//                 ? 'drop-shadow(0 0 8px rgba(0,229,255,.9))'
//                 : 'none',
//     });

//     return (
//         <div
//             style={{
//                 minHeight: '100vh',

//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',

//                 background: '#f5f5f5',

//                 padding: 30,
//             }}
//         >
//             <Card
//                 style={{
//                     width: 330,

//                     overflow: 'hidden',

//                     borderRadius: 22,

//                     border: '1px solid rgba(0,229,255,.25)',

//                     background:
//                         'rgba(8,15,30,0.96)',

//                     boxShadow: cardHover
//                         ? '0 25px 60px rgba(0,229,255,0.35), 0 0 35px rgba(114,46,209,.25)'
//                         : '0 10px 30px rgba(0,0,0,0.25)',

//                     transform: cardHover
//                         ? 'translateY(-12px) scale(1.03)'
//                         : 'translateY(0) scale(1)',

//                     transition:
//                         'all 0.45s cubic-bezier(.2,.8,.2,1)',
//                 }}

//                 onMouseEnter={() => setCardHover(true)}
//                 onMouseLeave={() => setCardHover(false)}

//                 cover={
//                     <div
//                         style={{
//                             height: 190,
//                             overflow: 'hidden',
//                             position: 'relative',
//                         }}
//                     >
//                         <img
//                             alt="Gaming"
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsTCKj95iqxi_-jmZg_XJmdUquR1t3Eb1sX-85TLj6g&s=10"
//                             style={{
//                                 width: '100%',
//                                 height: '100%',

//                                 objectFit: 'cover',

//                                 transform: cardHover
//                                     ? 'scale(1.12)'
//                                     : 'scale(1)',

//                                 transition:
//                                     'transform 0.8s cubic-bezier(.2,.8,.2,1)',

//                                 filter:
//                                     'brightness(.65) contrast(1.15) saturate(1.3)',
//                             }}
//                         />

//                         {/* IMAGE SHINE */}
//                         <div
//                             style={{
//                                 position: 'absolute',

//                                 top: 0,

//                                 left: cardHover
//                                     ? '130%'
//                                     : '-60%',

//                                 width: '35%',
//                                 height: '100%',

//                                 background:
//                                     'linear-gradient(90deg, transparent, rgba(0,229,255,.45), transparent)',

//                                 transform:
//                                     'skewX(-20deg)',

//                                 transition:
//                                     'left .8s ease',

//                                 pointerEvents: 'none',
//                             }}
//                         />

//                         {/* IMAGE OVERLAY */}
//                         <div
//                             style={{
//                                 position: 'absolute',

//                                 inset: 0,

//                                 background:
//                                     'linear-gradient(to top, rgba(0,0,0,.8), transparent 70%)',

//                                 opacity:
//                                     cardHover ? 0.4 : 0.7,

//                                 transition:
//                                     'opacity .4s ease',
//                             }}
//                         />

//                         {/* GAMING BADGE */}
//                         <div
//                             style={{
//                                 position: 'absolute',

//                                 top: 15,
//                                 right: 15,

//                                 padding:
//                                     '7px 12px',

//                                 borderRadius: 20,

//                                 background:
//                                     'rgba(0,0,0,.65)',

//                                 backdropFilter:
//                                     'blur(8px)',

//                                 color: '#00e5ff',

//                                 fontSize: 12,

//                                 fontWeight: 800,

//                                 border:
//                                     '1px solid rgba(0,229,255,.7)',

//                                 boxShadow:
//                                     '0 0 15px rgba(0,229,255,.4)',
//                             }}
//                         >
//                             🎮 GAMER MODE
//                         </div>

//                         {/* BATTLEFIELD TEXT */}
//                         <div
//                             style={{
//                                 position: 'absolute',

//                                 bottom: 15,
//                                 left: 18,

//                                 color: '#fff',

//                                 fontSize: 13,

//                                 fontWeight: 700,

//                                 letterSpacing: 1,

//                                 textShadow:
//                                     '0 0 10px rgba(0,229,255,.8)',
//                             }}
//                         >
//                             ⚡ BATTLE READY
//                         </div>
//                     </div>
//                 }

//                 actions={[
//                     <SettingOutlined
//                         key="setting"
//                         style={actionStyle('setting')}
//                         onMouseEnter={() =>
//                             setActiveButton('setting')
//                         }
//                         onMouseLeave={() =>
//                             setActiveButton(null)
//                         }
//                     />,

//                     <EditOutlined
//                         key="edit"
//                         style={actionStyle('edit')}
//                         onMouseEnter={() =>
//                             setActiveButton('edit')
//                         }
//                         onMouseLeave={() =>
//                             setActiveButton(null)
//                         }
//                     />,

//                     <EllipsisOutlined
//                         key="ellipsis"
//                         style={actionStyle('ellipsis')}
//                         onMouseEnter={() =>
//                             setActiveButton('ellipsis')
//                         }
//                         onMouseLeave={() =>
//                             setActiveButton(null)
//                         }
//                     />,
//                 ]}
//             >
//                 <Meta
//                     avatar={
//                         <div
//                             style={{
//                                 position: 'relative',

//                                 width: 62,
//                                 height: 62,

//                                 padding: 3,

//                                 borderRadius: '50%',

//                                 background:
//                                     'linear-gradient(135deg, #00f5ff, #1677ff, #8b2cff, #ff00c8, #00f5ff)',

//                                 backgroundSize:
//                                     '400% 400%',

//                                 animation:
//                                     'gamingBorder 4s ease infinite',

//                                 boxShadow: cardHover
//                                     ? `
//                                         0 0 12px #00e5ff,
//                                         0 0 25px #1677ff,
//                                         0 0 45px rgba(139,44,255,.7)
//                                       `
//                                     : `
//                                         0 5px 18px rgba(22,119,255,.25)
//                                       `,

//                                 transform: cardHover
//                                     ? 'translateY(-8px) rotate(8deg) scale(1.15)'
//                                     : 'translateY(0) rotate(0deg) scale(1)',

//                                 transition:
//                                     'all .45s cubic-bezier(.2,.8,.2,1)',
//                             }}
//                         >
//                             {/* AVATAR */}

//                             <Avatar
//                                 size={56}

//                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsTCKj95iqxi_-jmZg_XJmdUquR1t3Eb1sX-85TLj6g&s=10"

//                                 style={{
//                                     width: '100%',
//                                     height: '100%',

//                                     border:
//                                         '2px solid rgba(255,255,255,.9)',

//                                     background:
//                                         '#050816',

//                                     display: 'block',

//                                     imageRendering:
//                                         'pixelated',

//                                     boxShadow:
//                                         'inset 0 0 15px rgba(0,229,255,.25)',
//                                 }}
//                             />

//                             {/* SCAN LINE */}

//                             <span
//                                 style={{
//                                     position: 'absolute',

//                                     left: 7,
//                                     right: 7,

//                                     top: cardHover
//                                         ? '85%'
//                                         : '10%',

//                                     height: 2,

//                                     borderRadius: 10,

//                                     background:
//                                         'rgba(0,255,255,.9)',

//                                     boxShadow:
//                                         '0 0 8px #00ffff',

//                                     opacity:
//                                         cardHover ? 1 : 0,

//                                     transition:
//                                         'all .8s ease',

//                                     pointerEvents:
//                                         'none',
//                                 }}
//                             />

//                             {/* ONLINE STATUS */}

//                             <span
//                                 style={{
//                                     position: 'absolute',

//                                     right: -2,
//                                     bottom: 1,

//                                     width: 14,
//                                     height: 14,

//                                     borderRadius: '50%',

//                                     background:
//                                         '#00ff88',

//                                     border:
//                                         '2px solid #07111f',

//                                     boxShadow:
//                                         '0 0 8px #00ff88',

//                                     animation:
//                                         'onlinePulse 1.4s infinite',
//                                 }}
//                             />

//                             {/* LEVEL BADGE */}

//                             <span
//                                 style={{
//                                     position: 'absolute',

//                                     left: -8,
//                                     bottom: -4,

//                                     padding:
//                                         '2px 6px',

//                                     borderRadius: 6,

//                                     background:
//                                         '#050816',

//                                     color: '#00e5ff',

//                                     border:
//                                         '1px solid #00e5ff',

//                                     fontSize: 8,

//                                     fontWeight: 800,

//                                     boxShadow:
//                                         '0 0 8px rgba(0,229,255,.5)',
//                                 }}
//                             >
//                                 LVL 99
//                             </span>
//                         </div>
//                     }

//                     title={
//                         <div
//                             style={{
//                                 fontSize: 21,

//                                 fontWeight: 800,

//                                 background:
//                                     'linear-gradient(90deg,#00e5ff,#1677ff,#a855f7,#ff00c8,#00e5ff)',

//                                 backgroundSize:
//                                     '300% auto',

//                                 WebkitBackgroundClip:
//                                     'text',

//                                 WebkitTextFillColor:
//                                     'transparent',

//                                 animation:
//                                     'titleShine 3s linear infinite',

//                                 transform:
//                                     cardHover
//                                         ? 'translateX(5px)'
//                                         : 'translateX(0)',

//                                 transition:
//                                     'transform .3s ease',
//                             }}
//                         >
//                             ULTIMATE GAMER 🎮
//                         </div>
//                     }

//                     description={
//                         <div
//                             style={{
//                                 color: '#aeb8cc',

//                                 fontSize: 14,

//                                 lineHeight: 1.6,

//                                 transform:
//                                     cardHover
//                                         ? 'translateY(-2px)'
//                                         : 'translateY(0)',

//                                 transition:
//                                     'all .4s ease',
//                             }}
//                         >
//                             Enter the battlefield and unleash your skills ⚡

//                             <br />

//                             <span
//                                 style={{
//                                     color: '#00e5ff',

//                                     fontWeight: 700,

//                                     textShadow:
//                                         '0 0 8px rgba(0,229,255,.5)',
//                                 }}
//                             >
//                                 Level up • Dominate • Conquer 🏆
//                             </span>
//                         </div>
//                     }
//                 />

//                 {/* START GAMING BUTTON */}

//                 <button
//                     onMouseEnter={() =>
//                         setExploreHover(true)
//                     }

//                     onMouseLeave={() =>
//                         setExploreHover(false)
//                     }

//                     onClick={() =>
//                         alert(
//                             '🎮 Welcome Gamer! Your battle is about to begin! ⚡'
//                         )
//                     }

//                     style={{
//                         marginTop: 20,

//                         width: '100%',
//                         height: 50,

//                         border:
//                             '1px solid rgba(0,229,255,.4)',

//                         borderRadius: 14,

//                         color: '#fff',

//                         fontSize: 15,

//                         fontWeight: 800,

//                         cursor: 'pointer',

//                         background:
//                             'linear-gradient(135deg,#0066ff,#722ed1,#00cfff,#0066ff)',

//                         backgroundSize:
//                             '300% 300%',

//                         animation:
//                             exploreHover
//                                 ? 'gradientMove 2s ease infinite'
//                                 : 'none',

//                         boxShadow:
//                             exploreHover
//                                 ? '0 15px 35px rgba(114,46,209,.55), 0 0 25px rgba(0,229,255,.4)'
//                                 : '0 8px 20px rgba(22,119,255,.35)',

//                         transform:
//                             exploreHover
//                                 ? 'translateY(-4px) scale(1.025)'
//                                 : 'translateY(0) scale(1)',

//                         transition:
//                             'all .3s cubic-bezier(.2,.8,.2,1)',

//                         position: 'relative',

//                         overflow: 'hidden',
//                     }}
//                 >
//                     {/* BUTTON SHINE */}

//                     <span
//                         style={{
//                             position: 'absolute',

//                             top: 0,

//                             left:
//                                 exploreHover
//                                     ? '130%'
//                                     : '-60%',

//                             width: '35%',

//                             height: '100%',

//                             background:
//                                 'linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent)',

//                             transform:
//                                 'skewX(-20deg)',

//                             transition:
//                                 'left .7s ease',

//                             pointerEvents:
//                                 'none',
//                         }}
//                     />

//                     {/* BUTTON CONTENT */}

//                     <span
//                         style={{
//                             position: 'relative',

//                             zIndex: 2,

//                             display:
//                                 'inline-flex',

//                             alignItems:
//                                 'center',

//                             justifyContent:
//                                 'center',

//                             gap: 9,
//                         }}
//                     >
//                         <StarFilled
//                             style={{
//                                 fontSize: 19,

//                                 color: '#fff',

//                                 filter:
//                                     exploreHover
//                                         ? 'drop-shadow(0 0 8px rgba(255,255,255,.9))'
//                                         : 'none',

//                                 transform:
//                                     exploreHover
//                                         ? 'rotate(180deg) scale(1.35)'
//                                         : 'rotate(0deg) scale(1)',

//                                 transition:
//                                     'all .5s cubic-bezier(.2,.8,.2,1)',

//                                 animation:
//                                     exploreHover
//                                         ? 'starPulse .8s ease-in-out infinite alternate'
//                                         : 'none',
//                             }}
//                         />

//                         <span>
//                             Start Gaming
//                         </span>

//                         <span
//                             style={{
//                                 display:
//                                     'inline-block',

//                                 transform:
//                                     exploreHover
//                                         ? 'translateX(5px)'
//                                         : 'translateX(0)',

//                                 transition:
//                                     'transform .3s ease',

//                                 fontSize: 17,
//                             }}
//                         >
//                             ⚡
//                         </span>
//                     </span>
//                 </button>
//             </Card>

//             {/* ANIMATIONS */}

//             <style>
//                 {`

//                     @keyframes titleShine {

//                         0% {
//                             background-position:
//                                 300% center;
//                         }

//                         100% {
//                             background-position:
//                                 -300% center;
//                         }
//                     }

//                     @keyframes gradientMove {

//                         0% {
//                             background-position:
//                                 0% 50%;
//                         }

//                         50% {
//                             background-position:
//                                 100% 50%;
//                         }

//                         100% {
//                             background-position:
//                                 0% 50%;
//                         }
//                     }

//                     @keyframes starPulse {

//                         0% {
//                             transform:
//                                 rotate(160deg)
//                                 scale(1.1);
//                         }

//                         100% {
//                             transform:
//                                 rotate(210deg)
//                                 scale(1.4);
//                         }
//                     }

//                     @keyframes gamingBorder {

//                         0% {
//                             background-position:
//                                 0% 50%;
//                         }

//                         50% {
//                             background-position:
//                                 100% 50%;
//                         }

//                         100% {
//                             background-position:
//                                 0% 50%;
//                         }
//                     }

//                     @keyframes onlinePulse {

//                         0% {
//                             box-shadow:
//                                 0 0 4px #00ff88;
//                         }

//                         50% {
//                             box-shadow:
//                                 0 0 18px #00ff88,
//                                 0 0 25px rgba(0,255,136,.5);
//                         }

//                         100% {
//                             box-shadow:
//                                 0 0 4px #00ff88;
//                         }
//                     }

//                 `}
//             </style>
//         </div>
//     );
// };

// export default Antdcard;