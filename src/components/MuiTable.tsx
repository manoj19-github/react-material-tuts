import {
  TableContainer,
  TableBody,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  Table

} from "@mui/material"
const tableData=[{
    "id": 1,
    "first_name": "Marlene",
    "last_name": "Lardge",
    "email": "mlardge0@eventbrite.com",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Torey",
    "last_name": "Dalliwater",
    "email": "tdalliwater1@sina.com.cn",
    "gender": "Female"
  }, {
    "id": 3,
    "first_name": "Janaye",
    "last_name": "Atto",
    "email": "jatto2@wp.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Wilek",
    "last_name": "Plait",
    "email": "wplait3@dmoz.org",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Madeleine",
    "last_name": "Barbisch",
    "email": "mbarbisch4@psu.edu",
    "gender": "Non-binary"
  }, {
    "id": 6,
    "first_name": "Perl",
    "last_name": "Plover",
    "email": "pplover5@stumbleupon.com",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Talia",
    "last_name": "Darbyshire",
    "email": "tdarbyshire6@goo.gl",
    "gender": "Female"
  }, {
    "id": 8,
    "first_name": "Miltie",
    "last_name": "Edgars",
    "email": "medgars7@bing.com",
    "gender": "Agender"
  }, {
    "id": 9,
    "first_name": "Karia",
    "last_name": "Every",
    "email": "kevery8@narod.ru",
    "gender": "Polygender"
  }, {
    "id": 10,
    "first_name": "Lonnie",
    "last_name": "Boothroyd",
    "email": "lboothroyd9@sourceforge.net",
    "gender": "Male"
  }, {
    "id": 11,
    "first_name": "Blondelle",
    "last_name": "Sabben",
    "email": "bsabbena@tamu.edu",
    "gender": "Female"
  }, {
    "id": 12,
    "first_name": "Emeline",
    "last_name": "Stapford",
    "email": "estapfordb@vinaora.com",
    "gender": "Female"
  }, {
    "id": 13,
    "first_name": "Kippar",
    "last_name": "Bortolussi",
    "email": "kbortolussic@merriam-webster.com",
    "gender": "Male"
  }, {
    "id": 14,
    "first_name": "Alissa",
    "last_name": "Bussetti",
    "email": "abussettid@whitehouse.gov",
    "gender": "Non-binary"
  }, {
    "id": 15,
    "first_name": "Roma",
    "last_name": "Dunckley",
    "email": "rdunckleye@cloudflare.com",
    "gender": "Male"
  }, {
    "id": 16,
    "first_name": "Ashly",
    "last_name": "Francie",
    "email": "afrancief@huffingtonpost.com",
    "gender": "Female"
  }, {
    "id": 17,
    "first_name": "Deana",
    "last_name": "Hugle",
    "email": "dhugleg@webnode.com",
    "gender": "Bigender"
  }, {
    "id": 18,
    "first_name": "Casper",
    "last_name": "Bayston",
    "email": "cbaystonh@miitbeian.gov.cn",
    "gender": "Male"
  }, {
    "id": 19,
    "first_name": "Guillemette",
    "last_name": "Hinnerk",
    "email": "ghinnerki@yale.edu",
    "gender": "Bigender"
  }, {
    "id": 20,
    "first_name": "Kaine",
    "last_name": "Selly",
    "email": "ksellyj@walmart.com",
    "gender": "Male"
  }];


const MuiTable=()=>{

  return(
    <TableContainer sx={{maxHeight:"300px"}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
            <TableRow>
              <TableCell>
                Id
              </TableCell>
              <TableCell>
                First Name
              </TableCell>
              <TableCell>
                Last Name
              </TableCell>
              <TableCell align="center">
                Email
              </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((row,index)=>(
              <TableRow>
                <TableCell>
                  {row.id}
                </TableCell>
                  {row.first_name}
                <TableCell>
                  {row.last_name}
                </TableCell>
                <TableCell align="center">
                  {row.email}
                </TableCell>
                <TableCell>
                  {row.gender}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>



  )



}
export default MuiTable
