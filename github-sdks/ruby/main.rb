require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

client.create_ref(
    "rakiit/Github-Examples",
    "heads/sdks",
    "91d2d038f44f022931b78272289275aa0f7e8c5b"
)