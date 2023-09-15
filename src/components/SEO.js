import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({title, description}) {
return (
<Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* OpenGraph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
</Helmet>
)
}