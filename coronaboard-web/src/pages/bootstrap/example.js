import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, ButtonGroup, Card, Accordion, Alert, Dropdown} from 'react-bootstrap';
import Select from 'react-select';

const options = [
    {value:'KR', label : '한국'},
    {value:'JP', label : '일본'},
    {value:'US', label : '미국'},
    {value:'CN', label : '중국'},
]

export default function ButtonPage(){

    const [selectedOptionSingle, setSelectedOptionSingle] = useState();
    const [selectedOptionMulti, setSelectedOptionMulti] = useState();
    
    return(
        <div>
            <Container>
                <h1>버튼</h1>
                <div>
                    <Button variant='primary'>Primary</Button>
                    <Button variant='secondary'>Secondary</Button>
                    <Button variant='success'>Success</Button>
                    <Button variant='danger'>Danger</Button>
                    <Button variant='warning'>Warning</Button>
                    <Button variant='info'>Info</Button>
                    <Button variant='light'>Light</Button>
                    <Button variant='dark'>Dark</Button>
                </div>
                <hr/>
                <ButtonGroup size="md">
                    <Button variant="primary">오늘</Button>
                    <Button variant="outline-primary">어제</Button>
                </ButtonGroup>

                


            </Container>

            <br/><br/>

            <Container className='pt-3'>
                <h1>카드</h1>
                <Card.Header>카드 헤더</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="text-muted mb-3">
                        카드 서브타이틀
                    </Card.Subtitle>
                    <Card.Text>카드 텍스트</Card.Text>
                </Card.Body>
            </Container>

            <br/><br/>

            <Container>
                <h1>아코디언</h1>
                <Accordion defaultActiveKey='0'>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                            className='p-0'
                            as={Button}
                            variant="link"
                            eventKey="0"
                            >
                                카드의 헤더
                            </Accordion.Toggle>
                        </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>카드 콘텐츠</Card.Body>
                            </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>

            <br/><br/>

            <Container className='pt-3'>
                <h1>경고</h1>
                <Alert variant='primary'>Primary</Alert>
                <Alert variant='secondary'>Secondary</Alert>
                <Alert variant='success'>Success</Alert>
                <Alert variant='danger'>Danger</Alert>
                <Alert variant='warning'>Warning</Alert>
                <Alert variant='info'>Info</Alert>
            </Container>

            <br/><br/>

            <Container className='pt-3'>
                <h1>드롭다운</h1>
                <Dropdown>
                    <Dropdown.Toggle>링크 선택</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="https://www.naver.com">네이버</Dropdown.Item>
                        <Dropdown.Item href="https://www.google.com">구글</Dropdown.Item>    
                    </Dropdown.Menu>
                </Dropdown>

            </Container>

            <Container className='pt-3'>
                <h1>react-select 라이브러리</h1>
                <h3>단일 선택 상자</h3>
                <Select
                    value={selectedOptionSingle}
                    onChange={(selectedOption)=>{
                        console.log('Single option', selectedOption);
                        setSelectedOptionSingle(selectedOption);}
                    }
                    options={options}
                />
                <hr/>
                <h3>다중 선택 상자</h3>
                <Select
                    isMulti={true}
                    isSearchable={true}
                    placeholder="국가 선택"
                    value={selectedOptionMulti}
                    onChange={(selectedOption)=>{
                        console.log('Multi option', selectedOption);
                        setSelectedOptionMulti(selectedOption);}
                    }
                    options={options}
                />
            </Container>

        </div>
    )
}