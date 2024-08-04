// 'use client';
// import React from 'react';
// import { Menubar } from 'primereact/menubar';

// export default function MenuBar() {
//   const itemTemplate = (item, options) => {
//     return (
//       <a
//         href={item.url}
//         className={`${options.className} p-menuitem-link`}
//         style={{
//           color: 'black',
//           backgroundColor: 'white',
//           padding: '0.75rem 1rem',
//           textDecoration: 'none',
//         }}
//       >
//         <span className={`p-menuitem-icon ${item.icon}`}></span>
//         <span className="p-menuitem-text">{item.label}</span>
//       </a>
//     );
//   };

//   const items = [
//     {
//       label: 'Home',
//       icon: 'pi pi-home',
//       template: itemTemplate,
//     },
//     {
//       label: 'Features',
//       icon: 'pi pi-star',
//       template: itemTemplate,
//     },
//     {
//       label: 'Projects',
//       icon: 'pi pi-search',
//       template: itemTemplate,
//       items: [
//         {
//           label: 'Components',
//           icon: 'pi pi-bolt',
//           template: itemTemplate,
//         },
//         {
//           label: 'Blocks',
//           icon: 'pi pi-server',
//           template: itemTemplate,
//         },
//         {
//           label: 'UI Kit',
//           icon: 'pi pi-pencil',
//           template: itemTemplate,
//         },
//         {
//           label: 'Templates',
//           icon: 'pi pi-palette',
//           template: itemTemplate,
//           items: [
//             {
//               label: 'Apollo',
//               icon: 'pi pi-palette',
//               template: itemTemplate,
//             },
//             {
//               label: 'Ultima',
//               icon: 'pi pi-palette',
//               template: itemTemplate,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: 'Contact',
//       icon: 'pi pi-envelope',
//       template: itemTemplate,
//     },
//   ];

//   return (
//     <div className="card ">
//       <Menubar
//         model={items}
//         className={`fixed top-0 left-0 right-0 z-50 bg-transparent text-white shadow-sm px-10`}
//         pt={{
//           menuitem: {
//             className: 'bg-transparent',
//           },
//           content: { className: 'bg-transparent' },
//           label: { className: 'text-white' },
//         //   submenuIcon: { className: 'text-white' },
//         //   submenu:{className:'text-black'},
//         //   button:{className:'text-white'}
//         }}
//       />
//     </div>
//   );
// }
