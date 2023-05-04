import Head from "next/head";
import Link from 'next/link';
import Layout from "../../components/layout";

export default function Index(){
    return (
            <Layout>
                <h1>Hello Blog</h1> 
                <p>Return to <Link href="/">Home Page</Link></p>
            </Layout> 
    )
}