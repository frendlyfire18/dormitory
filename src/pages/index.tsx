import Nav from "../components/NavBar"
import SimpleSidebar from "../components/SideBar"
import { cur_url_with_host_and_port } from "../lib/constants";
const Index = ({users}) => (
  <div>
    <Nav/>
    <SimpleSidebar>
      
    </SimpleSidebar>
  </div>
)

export default Index

export async function getServerSideProps({context,resolvedUrl }) {
  const res = await fetch(`${cur_url_with_host_and_port}/api/users`);
  const data = await res.json();
  return {
    props: { users: JSON.parse(JSON.stringify(data)) },
  };
}
