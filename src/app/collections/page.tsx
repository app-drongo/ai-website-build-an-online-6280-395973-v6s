import Pageheader from '@/components/sections/collections/Pageheader'
import Productshowcase from '@/components/sections/collections/Productshowcase'
import Gallery from '@/components/sections/collections/Gallery'
import Pricing from '@/components/sections/collections/Pricing'

export default function CollectionsPage() {
  return (
    <>
      <Pageheader />
      <Productshowcase />
      <Gallery />
      <Pricing />
    </>
  )
}