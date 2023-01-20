import Head from 'next/head'
import Layout from '@/components/Layout'
import Colors from '@/components/Colors/Colors'
import Navbar from '@/components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import Values from 'values.js'

export default function ToneGenerator() {
  // Redux Store
  const { color } = useSelector((state) => state.settings)
  const colors = new Values(color).all(100 / 10)
  const base = colors.filter((color) => color.type === 'base')
  const tint = colors.filter((color) => color.type === 'tint')
  const shade = colors.filter((color) => color.type === 'shade')

  return (
    <Layout>
      <Head>
        <title>Colors - Tone Generator</title>
        <meta name="description" content="HUE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-full h-auto flex flex-col flex-1">
        <Colors grid={`single`}>
          <Colors.Section title={`Tints Pallette`}>
            {tint.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>

          <Colors.Section title={`Main`}>
            {base.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>

          <Colors.Section title={`Shades`}>
            {shade.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>
        </Colors>
      </div>
    </Layout>
  )
}
