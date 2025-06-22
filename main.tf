terraform {
  required_providers {
    netlify = {
      source  = "royge/netlify"
      version = ">= 0.4.2"
    }
  }
}


provider "netlify" {
  token = var.netlify_token
}

variable "netlify_token" {
  type = string
  description = "Netlify token"
}

variable "netlify_site" {
  type = string
  description = "Netlify site"
}

variable "netlify_repo" {
  type = string
  description = "Netlify repo"
}

resource "netlify_site" "vue_app" {
  name = var.netlify_site
  repo {
    provider     = "github"
    repo_path    = var.netlify_repo
    repo_branch  = "main"
    command      = "npm run build"
    dir          = "dist"
  }
}

# resource "netlify_site_deploy" "vue_build" {
#   site_id = netlify_site.vue_app.id
#   dir     = "dist/"
# }
