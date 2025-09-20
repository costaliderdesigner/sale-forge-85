import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export const SEOHead = ({
  title = "Costa Líder Designer - Landing Pages de Alta Conversão",
  description = "Transforme visitantes em clientes com landing pages profissionais que vendem de verdade. Aumente suas conversões em até 300% em 7 dias.",
  keywords = "landing page, alta conversão, marketing digital, vendas online, design responsivo, ROI, conversão, leads",
  ogImage = "/og-image.jpg",
  canonical,
  noindex = false
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords
      document.head.appendChild(meta)
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', window.location.origin + ogImage)
    updateMetaTag('property', 'og:url', window.location.href)
    updateMetaTag('property', 'og:type', 'website')
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', window.location.origin + ogImage)
    
    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonical
        document.head.appendChild(link)
      }
    }
    
    // Handle noindex
    if (noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow')
    } else {
      updateMetaTag('name', 'robots', 'index, follow')
    }
    
  }, [title, description, keywords, ogImage, canonical, noindex])
  
  const updateMetaTag = (attribute: string, value: string, content: string) => {
    const existingTag = document.querySelector(`meta[${attribute}="${value}"]`)
    if (existingTag) {
      existingTag.setAttribute('content', content)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute(attribute, value)
      meta.content = content
      document.head.appendChild(meta)
    }
  }
  
  return null
}

export default SEOHead