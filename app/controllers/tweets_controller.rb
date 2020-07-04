class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end
  def create
    @tweet = Tweet.new(tweet_prams)
    if @tweet.save
      redirect_to tweets_path

    else

    end
  end

  private
  def tweet_prams
    params.require(:tweet).permit(:body, :parent_id)
  end
end
