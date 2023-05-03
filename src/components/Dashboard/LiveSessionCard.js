import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
    Container,
    Badge
  } from "reactstrap";
  import "../../assets/css/dashboard.css";

function LiveSessionCard() {
    return(
        <Card className="shadow p-3 mb-5 bg-white rounded">
              <CardBody>
                <Row className="m-0">
                  <Badge className="time-badge wrap-content">Starting in 3:21</Badge>
                </Row>
                <Row className="mt-5">
                  <Col className="card-left-container">
                  <p className="course-category">Web Development</p>
                  <h5 className="course-title">Intro to HTML</h5>
                  <p className="course-subhead">user1 created 5 min ago</p>
                  </Col>
                  <Col className="card-right-container">
                  <Button className="live-button">Join Live</Button>
                  <p className="course-subhead text-center">1/3 joined</p>
                  </Col>
                  
                  {/* <Col>
                    <div className="numbers">
                    <CardTitle tag="p">Intro to HTML</CardTitle>
                      <p className="text-left card-category">11 problems</p>
                      <div className="icon-small text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                      <Button>Join</Button>
                    </div>
                      <p />
                    </div>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
    )
}

export default LiveSessionCard;