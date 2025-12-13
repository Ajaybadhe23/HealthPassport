import DocumentListWithPreview from '../../components/docVeiwer'
import FloatingAddButton from '../../components/floatingAction';
export const documents = [
  {
    id: 1,
    name: "Blood Report.pdf",
    type: "pdf",
    url: "C:\Users\MHKTN20\Downloads\pdf-test.pdf",
  },
  {
    id: 2,
    name: "Chest X-Ray.png",
    type: "image",
    url: "https://www.dummyimage.com/600x400/000/fff",
  },
];

function Reports() {
  return (
    <div><DocumentListWithPreview documents={documents}/>
    <FloatingAddButton/></div>
  )
}

export default Reports