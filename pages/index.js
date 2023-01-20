import Head from 'next/head'
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import Colors from '@/components/Colors/Colors'
import Values from 'values.js'
import { useEffect, useState } from 'react'

export default function Home() {
  // Redux Store
  const { colorPallette } = useSelector((state) => state.settings)

  const [color, setColor] = useState([])

  useEffect(() => {
    colorPallette.map((item) =>
      setColor((index) => [
        ...index,
        {
          name: item.name,
          pallette: [
            new Values(item.color).tint(10),
            new Values(item.color),
            new Values(item.color).shade(6)
          ]
          // pallette: new Values(item.color)
          //   .all(100 / 10)
          //   .filter((i) => i.weight === 10 || i.weight === 0)
        }
      ])
    )
  }, [])

  return (
    <Layout>
      <Head>
        <title>Colors - Color Pallette</title>
        <meta name="description" content="HUE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar noPicker />

      <Colors grid={`multiple`}>
        {color.map((item, index) => (
          <Colors.Section title={item.name} key={index}>
            {item.pallette.map((i) => (
              <Colors.Item key={i.type} data={i} />
            ))}
          </Colors.Section>
        ))}
      </Colors>
    </Layout>
  )
}
