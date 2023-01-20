import Head from 'next/head'
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import Colors from '@/components/Colors/Colors'
import Values from 'values.js'

export default function ThemeGenerator() {
  // Redux Store
  const { color } = useSelector((state) => state.settings)
  const colors = new Values(color)
  const base = [colors.tint(10), colors, colors.shade(10)]
  const tint = [
    colors.tint(100),
    colors.tint(98),
    colors.tint(93.6),
    colors.tint(80),
    colors.tint(73.6),
    new Values(`#${colors.tint(50).hex}`).shade(30),
    new Values(`#${colors.tint(50).hex}`).shade(70),
    new Values(`#${colors.tint(50).hex}`).shade(90)
  ]
  const shade = [
    colors.shade(100),
    colors.shade(93),
    colors.shade(90.5),
    colors.shade(86),
    colors.shade(80),
    new Values(`#${colors.shade(50).hex}`).tint(30),
    new Values(`#${colors.shade(50).hex}`).tint(70),
    new Values(`#${colors.shade(50).hex}`).tint(90)
  ]

  console.log()

  return (
    <Layout>
      <Head>
        <title>HUE</title>
        <meta name="description" content="HUE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-full h-auto flex flex-col flex-1">
        <Colors grid={`single`}>
          <Colors.Section title={`Light Theme`}>
            {tint.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>

          <Colors.Section title={`Main Color`}>
            {base.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>

          <Colors.Section title={`Dark Theme`}>
            {shade.map((item) => (
              <Colors.Item key={item.weight} data={item} />
            ))}
          </Colors.Section>
        </Colors>
      </div>
    </Layout>
  )
}
