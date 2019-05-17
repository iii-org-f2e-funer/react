import React from 'react'
import '../styles/product/product.scss'
import Footer from '../components/Footer'
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
} from 'react-bootstrap'
const product = () => {
  return (
    <>
      <div className="banner">
        {' '}
        <h2 className="banner-tittle">桌遊，知性與深度的休閒生活方式</h2>
        <img
          id="purplemonster"
          src={process.env.PUBLIC_URL + '/images/product/redmonster.png'}
        />
      </div>
      <div className="outside">
        <div className="search">
          <div className="search-control">
            <InputGroup className="mt-5 ml-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  <i class="fa fa-search" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </div>
          <label className="mt-4 ml-4">遊戲分類</label>
          <div className="game-control ml-4 mr-4 mt-1 ">
            <DropdownButton id="dropdown-basic-button" title="全部">
              <Dropdown.Item className="dropdown" href="#/action-1">
                遊戲1
              </Dropdown.Item>
              <Dropdown.Item className="dropdown" href="#/action-2">
                遊戲2
              </Dropdown.Item>
              <Dropdown.Item className="dropdown" href="#/action-3">
                遊戲3
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <label className="mt-4 ml-4">品牌</label>
          <div className="game-control ml-4 mr-4 mt-1 ">
            <DropdownButton id="dropdown-basic-button" title="全部">
              <Dropdown.Item className="dropdown" href="#/action-1">
                品1
              </Dropdown.Item>
              <Dropdown.Item className="dropdown" href="#/action-2">
                品2
              </Dropdown.Item>
              <Dropdown.Item className="dropdown" href="#/action-3">
                品3
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <Button className="searchit m-4" block>
            篩選商品
          </Button>
        </div>

        <div className="cards" />
      </div>

      <Footer />
    </>
  )
}

export default product
