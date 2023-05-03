import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
    Container
  } from "reactstrap";
  import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

function StudyPlanCard() {
  const navigate = useNavigate();
    return(
        <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col lg="2">
                  <div className="bg-gray">
                  <ArrowRight color="black" size={36} />
                  </div>
                  </Col>
                  
                  <Col lg="5">
                  <h6 className="card-title text-capitalize">Intro to HTML</h6>
                  <p> Last practiced 4 days ago</p>
                  </Col>
                  <Col lg="5">
                  <Button 
                    className="action-button text-capitalize fw-normal" 
                    onClick={() => navigate("/practice-problem", {
                      state:{
                        topic: 'Intro to HTML', 
                        isInProgress: false
                        }
                        })
                    }> New private session</Button>
                  </Col>
                  
                  {/* <Col md="8" xs="7">
                    <div className="numbers">
                    <CardTitle tag="p">Web Design</CardTitle>
                      <p className="text-left card-category">11 problems</p>
                      <div className="icon-small text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                      <p />
                    </div>
                  </Col>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
    )
}

export default StudyPlanCard;