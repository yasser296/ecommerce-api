package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import java.util.UUID;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * SellerPreview
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class SellerPreview {

  private @Nullable UUID id;

  private @Nullable String storeName;

  private @Nullable BigDecimal rating;

  public SellerPreview id(@Nullable UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @Valid 
  @Schema(name = "id", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("id")
  public @Nullable UUID getId() {
    return id;
  }

  @JsonProperty("id")
  public void setId(@Nullable UUID id) {
    this.id = id;
  }

  public SellerPreview storeName(@Nullable String storeName) {
    this.storeName = storeName;
    return this;
  }

  /**
   * Get storeName
   * @return storeName
   */
  
  @Schema(name = "storeName", example = "Tech Store", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("storeName")
  public @Nullable String getStoreName() {
    return storeName;
  }

  @JsonProperty("storeName")
  public void setStoreName(@Nullable String storeName) {
    this.storeName = storeName;
  }

  public SellerPreview rating(@Nullable BigDecimal rating) {
    this.rating = rating;
    return this;
  }

  /**
   * Get rating
   * @return rating
   */
  @Valid 
  @Schema(name = "rating", example = "4.7", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("rating")
  public @Nullable BigDecimal getRating() {
    return rating;
  }

  @JsonProperty("rating")
  public void setRating(@Nullable BigDecimal rating) {
    this.rating = rating;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SellerPreview sellerPreview = (SellerPreview) o;
    return Objects.equals(this.id, sellerPreview.id) &&
        Objects.equals(this.storeName, sellerPreview.storeName) &&
        Objects.equals(this.rating, sellerPreview.rating);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, storeName, rating);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SellerPreview {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    storeName: ").append(toIndentedString(storeName)).append("\n");
    sb.append("    rating: ").append(toIndentedString(rating)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

