<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
      <div class="c-sidebar-brand-full">
        BoilerPlate
      </div>
      <div class="c-sidebar-brand-minimized">
        BP
      </div>
      {{-- <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
        <use xlink:href="{{ asset('assets/brand/coreui.svg#full') }}"></use>
      </svg>
      <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
        <use xlink:href="{{ asset('assets/brand/coreui.svg#signet') }}"></use>
      </svg> --}}
    </div>
    <ul class="c-sidebar-nav">
      <li class="c-sidebar-nav-title">Dashboard <span class="sr-only">Dashboard</span></li>
      <li class="c-sidebar-nav-item">
        <a class="c-sidebar-nav-link" href="#">
          <svg class="c-sidebar-nav-icon">
            <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-fax') }}"></use>
          </svg> Menu
          <span class="badge badge-warning">On Going</span>
        </a>
        <span class="sr-only">Menu</span>
      </li>
      <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg class="c-sidebar-nav-icon">
            <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-save') }}"></use>
          </svg> Menu
        </a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="#"><span class="c-sidebar-nav-icon"></span> Menu level 1</a><span class="sr-only">Menu level 1</span></li>
        </ul>
        <span class="sr-only">Laporan</span>
      </li>
      <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <svg class="c-sidebar-nav-icon">
            <use xlink:href="{{ asset('vendors/@coreui/icons/svg/free.svg#cil-user') }}"></use>
          </svg> Auth
        </a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{{ route('login') }}"><span class="c-sidebar-nav-icon"></span> Login</a><span class="sr-only">Login</span></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{{ route('register') }}"><span class="c-sidebar-nav-icon"></span> Register</a><span class="sr-only">Register</span></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{{ route('forgot-password') }}"><span class="c-sidebar-nav-icon"></span> Forgot Password</a><span class="sr-only">Forgot Password</span></li>
          <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{{ route('reset-password', "halo") }}"><span class="c-sidebar-nav-icon"></span> Reset Password</a><span class="sr-only">Reset Password</span></li>
        </ul>
      </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
  </div>