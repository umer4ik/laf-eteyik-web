<script lang="ts">
import { mobileDrawer } from "../stores/mobileDrawer";
</script>
<div class="footer-box {$mobileDrawer ? 'drawer-open' : ''}">
  <footer>
    <span class="copyright">Laf Eteyik ©️ {new Date().getFullYear()}</span>
    <a class="info-link" href="mailto:info@laf-eteyik.com">info@laf-eteyik.com</a>
  </footer>
</div>

<style>
  .footer-box {
    height: 60px;
    margin-top: auto;
    transition: filter .4s var(--easing);
  }
  .drawer-open {
    filter: blur(3px);
  }
  footer {
    max-width: var(--content-width);
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 300;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .info-link {
    margin-left: auto;
  }

</style>