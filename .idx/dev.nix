# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  packages = [
    pkgs.nodejs_22
    pkgs.curl
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    extensions = [];

    # Enable previews
    previews = {
      enable = false;
    };

    # Workspace lifecycle hooks
    workspace = {};
  };
}
