// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

// export default function Example() {
//     // First, you create the component...
//     function DataTabs({ data }) {
//       return (<>

//         <Tabs>
//           <TabList>{data.map((tab, index) => (<Tab key={index}>{tab.label}</Tab>))}</TabList>
//           <TabPanels>
//               {data.map((tab, index) =>
//                  (<TabPanel p={4} key={index}>{tab.content}</TabPanel>)
//                 )}
//           </TabPanels>
//         </Tabs>

//       </>);
//     }
  
//     // Next, you have an array of data...
//     const tabData = [
//       {
//         label: "Nigerian Jollof",
//         content: "Perhaps the greatest dish ever invented.",
//       },
//       {
//         label: "Pounded Yam & Egusi",
//         content:
//           "Perhaps the surest dish ever invented but fills the stomach more than rice.",
//       },
//     ];
  
//     // you can just pass it in:
//     return (<DataTabs data={tabData}/>);
//   }
