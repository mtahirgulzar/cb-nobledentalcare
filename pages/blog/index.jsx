import React from 'react'
import BlogCards from '../../src/components/BlogCards'
import Appointment from '../../src/components/Common/Appointment'
import CommonHero from '../../src/components/Common/CommonHero'
import Layout from '../../src/components/Layout'
import PaginatedBlogs from '../../src/components/PaginatedBlogs'
import { adminPath } from '../../utils/constants'
import { jwtToken } from "../../utils/constants";

const Blog=({ siteData, pageData, blogData, servicesData, navCat }) =>{

  return (
    <div>
      <Layout data={siteData} SeoData={pageData?.seo} navServices={servicesData} navCat={navCat}>
        <CommonHero data={pageData?.hero} />
        <PaginatedBlogs data={blogData} />
        <Appointment data={pageData?.appointment} />
      </Layout>
    </div>
  )
}

export default Blog
export async function getStaticProps() {
  let pageData = null;
  let siteData = null;
  let blogData = null;
  let servicesData = null;
  let navCat = null;
	let bearer = "Bearer " + jwtToken


  try {
    servicesData = await (
      await fetch(`${adminPath}/our-services?fields[0]=title&fields[1]=slug&populate[4]=services_category`,{
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
      
        },
        })
    ).json();
    navCat = await (await fetch(`${adminPath}/services-categories?fields[0]=name`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,       
      },
      })).json();
    pageData = await (await fetch(`${adminPath}/blog?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json',
      },
      })).json();
    siteData = await (await fetch(`${adminPath}/site?populate=deep`,{
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json',
      },
      })).json();
    blogData = await (
      await fetch(`${adminPath}/our-blogs?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=img&populate[4]=blog_category&fields[5]=publishedDate&fields=imagePath`,{
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
        },
        })
    ).json();

  } catch (err) { }
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      siteData: siteData?.data?.attributes || "null",
      servicesData:
        servicesData?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedDate) -
            new Date(a.attributes.publishedDate)
        ) || null,
      navCat: navCat?.data?.sort(
        (a, b) =>
          new Date(a.attributes.createdAt) -
          new Date(b.attributes.createdAt)
      ) || null,
      blogData:
        blogData?.data?.sort(
          (a, b) =>
            new Date(b.attributes.publishedDate) -
            new Date(a.attributes.publishedDate),
        ) || null,
    },
  };
}