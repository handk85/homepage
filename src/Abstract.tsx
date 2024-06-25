import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function playFirstName() {
  var audio = new Audio("donggyun.m4a");
  audio.play();
}

function Abstract() {
  return (
    <Grid container style={{ marginBottom: "2rem" }}>
      <Grid
        md={3}
        xs={12}
        style={{ minWidth: 210 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img src="./profile.jpg" width={200} alt="DongGyun Han" />
        </Grid>
      </Grid>
      <Grid md={9} xs={12} style={{ paddingTop: "2vh" }}>
        <Typography variant="h5">
          DongGyun
          <sup style={{ fontSize: "60%" }}>
            <FontAwesomeIcon icon={faVolumeUp} onClick={playFirstName} />
          </sup>{" "}
          Han
        </Typography>
        <Typography variant="h6">Lecturer (Assistant Professor)</Typography>
        <Typography variant="h6">Department of Computer Science</Typography>
        <Typography variant="h6">
          Royal Holloway, University of London
        </Typography>
        <br />
        <Typography>
          Dr DongGyun Han is a lecturer (assistant professor) at the{" "}
          <a href="https://www.cs.rhul.ac.uk/">
            Department of Computer Science
          </a>{" "}
          at{" "}
          <a href="https://www.royalholloway.ac.uk/">
            Royal Holloway, University of London
          </a>
          . He is mainly working on software engineering research. His main
          research interests are Empirical Study, AI for Software Engineering
          (AI4SE), Software Engineering for AI (SE4AI), and Code Review. He was
          a research scientist (postdoc) at{" "}
          <a href="https://soarsmu.github.io/">
            SOftware Analytics Research (SOAR) group
          </a>{" "}
          and <a href="https://smc.smu.edu.sg/">Secure Mobile Centre</a> at{" "}
          <a href="https://www.smu.edu.sg">
            Singapore Management University (SMU)
          </a>
          . Before joining SMU, he was a software development engineer at{" "}
          <a href="https://aws.amazon.com">Amazon Web Services</a>. He completed
          his PhD at the{" "}
          <a href="http://ucl.ac.uk">University Gridlege London (UCL)</a>. He
          has worked for{" "}
          <a href="https://itc.kaist.ac.kr/">
            KAIST Institute for IT Convergence
          </a>{" "}
          as a researcher after getting his MPhil. at{" "}
          <a href="http://www.ust.hk">
            Hong Kong University of Science and Technology (HKUST).
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Abstract;
