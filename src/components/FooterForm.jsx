import { Button } from "../style/Button"
import { Input } from "../style/Input"
import { StyledFooterForm } from "../style/FooterForm.styled"

const FooterForm = () => {
  return (
    <StyledFooterForm>
      <Input type="email" name="email" id="email" placeholder="Enter Your email" />
      <Button className="footer-btn">Subscribe</Button>
    </StyledFooterForm>
  )
}

export default FooterForm
