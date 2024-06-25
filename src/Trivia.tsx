import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGuitar, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import App from "./App";

function Youtube(props: { title: string; desc: string; url: string }) {
  return (
    <Grid item md={6} xs={12}>
      <Card style={{ width: 510 }}>
        <CardMedia>
          <iframe
            width="510"
            height="286"
            src={props.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </CardMedia>
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Music() {
  return (
    <>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faMusic} /> Music
      </Typography>
      <br />
      <Grid container>
        <Grid md={4} xs={12}>
          <Card sx={{ maxWidth: "360px" }}>
            <CardMedia sx={{ maxWidth: "360px", maxHeight: "360px" }}>
              <img src="./dk.jpg" alt="In a gig" style={{ width: "360px" }} />
            </CardMedia>
          </Card>
          <CardContent>
            <p className="text-secondary">
              Hope and Anchor, London, UK, 25 August 2016
            </p>
          </CardContent>
        </Grid>
        <Grid md={8} xs={12}>
          <Typography>
            In my free time, I love to play musical instruments. I mostly play
            electric guitar, but I also can play acoustic guitar, bass, and
            piano at a basic level. Playing music helps me relieve stress.
            Therefore, I always have at least an electric guitar with me
            whenever I relocate to a city. Rather than exercising a specific
            song (I am lazy and not good at memorising something…), I love to
            improvise over diverse backing tracks available on YouTube. I also
            have basic songwriting skills, so I write my own songs sometimes.
          </Typography>
        </Grid>
      </Grid>

      <br />

      <Typography variant="h6">
        <FontAwesomeIcon icon={faYoutube} /> Videos
      </Typography>

      <Grid container rowSpacing={2}>
        <Youtube
          title="Wham! - Last Christmas (cover)"
          desc="Berlin, Germany, 26 July 2020"
          url="https://www.youtube.com/embed/C9Ncz6B6fX8?si=rvAxcbGCZKMV_smD"
        />
        <Youtube
          title="Toy - 내가 너의 곁에 잠시 살았다는걸 (cover)"
          desc="Berlin, Germany, 25 November 2019"
          url="https://www.youtube.com/embed/KQjBOIO8N98?si=dZmyrIeqczn7bHss"
        />
        <Youtube
          title="Improvisation on C"
          desc="Seattle, US, 15 December 2018"
          url="https://www.youtube.com/embed/mEGWIXHneb0?si=KdS5-OUldjIv4gtR"
        />
        <Youtube
          title="Jason Mraz - Not so usual (cover)"
          desc="Roadtrip & The Workshop, London, UK, 23 June 2017"
          url="https://www.youtube.com/embed/8Ma4zfZlWyI?si=azsjkY7wdrLy_nAi"
        />
        <Youtube
          title="The Huges - Winter Hate Song"
          desc="Hope & Anchor, London, UK, 25 August 2016"
          url="https://www.youtube.com/embed/WxBt_WMWH7g?si=HRFjfef-q-g9l83O"
        />
        <Youtube
          title="Coldplay - Yellow (cover)"
          desc="The Water Rats, London, UK, 10 June 2016"
          url="https://www.youtube.com/embed/XQ2bM1s6cYM?si=fLWlawPShDtRy9S4"
        />
      </Grid>

      <br />
      <Typography variant="h6">
        <FontAwesomeIcon icon={faGuitar} /> Guitars that I own or have owned
      </Typography>
      <List>
        <ListItem>
          <Typography>
            Epiphone Les Paul Standard 60s (Bourbon Burst), 2022&#8211;Present
            &#8212; Using in UK
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Squire Classic Vibe 70s Stratocaster HSS (Walnut), 2021&#8211;2022
            &#8212; Used in Singapore
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            PRS SE Custom 24 (Tampas Green), 2019&#8211;2021 &#8212; Used in
            Berlin
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Epiphone Les Paul Custom Pro (Ebony), 2017&#8211;2018 &#8212; Used
            in Seattle and UK
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            American Standard Stratocaster (Sienna Sunburst), 2016&#8211;Present
            &#8212; Used in New York, UK, Seattle, Korea
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Epiphone Dot ES-335 (Cherry), 2015&#8211;2016 &#8212; Used in UK
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Epiphone Les Paul Standard (Cherry Sunburst), 2012&#8211;2015
            &#8212; Used in Hong Kong and Korea
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Squire Stratorcaster (Sunburst), 2004&#8211;2012 &#8212; Used in
            Korea and Hong Kong
          </Typography>
        </ListItem>
      </List>
    </>
  );
}

function Island() {
  return (
    <>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faGlobe} /> Island
      </Typography>
      <br />
      <Typography variant="body1">
        I was born on an island and have spent most of my lifetime on multiple
        islands.
      </Typography>
      <br />
      <Typography>
        Jeju Island is a beautiful place where I was born and grew up until my
        early twenties. Then, I was in Hong Kong and the UK for my master and
        PhD degrees, respectively. During my postdoc, I was in Singapore. Of
        course, I have chances to live in non-island cities as well. When I
        spent three months in New York for an internship, however, I was in
        Manhattan (which is an island). When I worked in Berlin after finishing
        my PhD, my office was on the Museum island.
      </Typography>
    </>
  );
}

function Trivia() {
  return (
    <App>
      <Island />
      <Divider sx={{ my: 4 }} />
      <Music />
    </App>
  );
}

export default Trivia;
